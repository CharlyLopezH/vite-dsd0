import { useState } from "react";

export const useHandleClick=(initialValue)=> {
    const [buttonValue, setValue] = useState(initialValue);
  
    const handleButtonClick=()=> {
      setValue('Nuevo valor');
    }
  
    return { buttonValue, handleButtonClick };
  }