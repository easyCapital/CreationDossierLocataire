import { Input } from "antd";
import React, { useState, useEffect, useRef } from "react";

let autoComplete;

function handleScriptLoad(updateQuery, autoCompleteRef, placeOfBirthMode) {
  let options = {
    componentRestrictions: { country: "fr" },
  };

  if (placeOfBirthMode) options = { types: ["(cities)"] };

  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current.input,
    options
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery) {
  console.log(autoComplete.getPlace());
  const addressObject = autoComplete.getPlace();

  const query = addressObject.formatted_address;
  updateQuery(query);
}

function SearchLocationInput({
  value = null,
  onChange,
  placeOfBirthMode = false,
}) {
  const [query, setQuery] = useState(value);
  const autoCompleteRef = useRef(null);

  const triggerChange = (changedValue) => {
    setQuery(changedValue?.target?.value ?? changedValue);
    onChange?.(changedValue);
  };

  useEffect(() => {
    handleScriptLoad(triggerChange, autoCompleteRef, placeOfBirthMode);
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
