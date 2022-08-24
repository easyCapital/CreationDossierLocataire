import { Input } from "antd";
import React, { useState, useEffect, useRef } from "react";

function SearchLocationInput({
  value = null,
  onChange,
  placeOfBirthMode = false,
  placeholder = "",
}) {
  const [query, setQuery] = useState(value);
  const autoCompleteRef = useRef(null);

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
    const addressObject = autoComplete.getPlace();

    const query = addressObject.formatted_address;
    updateQuery(query);
  }

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
      placeholder={placeholder}
      value={typeof query != "object" ? query : value}
    />
  );
}

export default SearchLocationInput;
