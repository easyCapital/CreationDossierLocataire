import { Input } from "antd";
import React, { useState, useEffect, useRef } from "react";

let autoComplete;

function handleScriptLoad(updateQuery, autoCompleteRef, address, setAddress) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current.input,
    { componentRestrictions: { country: "fr" } }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery, address, setAddress)
  );
}

async function handlePlaceSelect(updateQuery, address, setAddress) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  updateQuery(query);
}

function SearchLocationInput({ value = null, onChange, address, setAddress }) {
  const [query, setQuery] = useState(value);
  const autoCompleteRef = useRef(null);

  const triggerChange = (changedValue) => {
    setQuery(changedValue?.target?.value ?? changedValue);
    onChange?.(changedValue);
  };

  useEffect(() => {
    handleScriptLoad(triggerChange, autoCompleteRef, address, setAddress);
  }, []);

  return (
    <Input
      ref={autoCompleteRef}
      onChange={triggerChange}
      placeholder="Recherchez une adresse"
      value={typeof query != "object" ? query : value}
    />
  );
}

export default SearchLocationInput;
