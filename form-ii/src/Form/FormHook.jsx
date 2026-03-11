import React, { useState } from 'react';

const FormHook = (defaultValue) => {

    const [value, setValue] = useState(defaultValue);
    const handleOnChange = (e) =>{
        setValue(e.target.value);
    }
    return [value, handleOnChange];

};

export default FormHook;