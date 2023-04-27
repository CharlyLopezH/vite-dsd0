import { useState } from "react";

export const useSumarCont=(countInicial)=>{

const [value,setValue]=useState(countInicial);

const onHandlerClickButton=()=>{  
  setValue(value+1);
  console.log(value);
}

return {
  value,
  onHandlerClickButton
}
} 