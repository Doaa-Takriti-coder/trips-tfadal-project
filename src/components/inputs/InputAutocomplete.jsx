import React from 'react';
import { Autocomplete } from '@react-google-maps/api';

const InputAutocomplete = ({ placeholder, ref }) => {
  return (
    <Autocomplete>
      <input
        type="text"
        placeholder={placeholder}
        ref={ref}
        style={{
          width: '100%',
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '16px',
        }}
      />
    </Autocomplete>
  );
};

export default InputAutocomplete;
