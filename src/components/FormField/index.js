import React from 'react';

const FormField = ({value, type, name, onChange, label}) => (
    <div>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={label}
        />
    </div>
);

export default FormField;