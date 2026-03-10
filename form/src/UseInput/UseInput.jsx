import React, { useState } from 'react';

const UseInput = (defaultValue) => {
   const [value, setValue] = useState(defaultValue);

   const handleFieldOnChange = (e) =>{
    setValue(e.target.value)
   }

   return [value, handleFieldOnChange]
};

export default UseInput;