import { useState } from "react";

const useInput = (validateValue) => {

  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValue(enteredValue);
  const hasError = !enteredValue && isTouched;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);

    console.log(enteredValue);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const clearInputHandler = () => {
    setEnteredValue('');
    setIsTouched(false);
  }
 
  return {
    value: enteredValue,
    isValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    clearInputHandler
  };
};

export default useInput;