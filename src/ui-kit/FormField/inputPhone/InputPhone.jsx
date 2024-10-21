import React, { forwardRef } from "react";

const InputPhone = forwardRef(
  ({ name, type, placeholder, onBlur, onFocus, className, ...props }, ref) => {
    const PATTERN = /\D/g; // все символы, которые не числа

    const getInputNumbersValue = (value) => {
      // return only numbers
      return value.replace(PATTERN, "");
    };

    const handlePhoneInput = (e) => {
      const input = e.target;
      let inputNumbersValue = getInputNumbersValue(input.value);
      let formattedInputValue = "";
      const selectionStart = input.selectionStart;

      if (!inputNumbersValue) {
        return (input.value = "");
      }

      if (input.value.length !== selectionStart) {
        return;
      }

      if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
        // Russian phone number
        if (inputNumbersValue[0] === "9") {
          inputNumbersValue = "7" + inputNumbersValue;
        }

        const firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
        formattedInputValue = firstSymbols + " ";

        if (inputNumbersValue.length > 1) {
          formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
        }
        if (inputNumbersValue.length >= 5) {
          formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
        }
        if (inputNumbersValue.length >= 8) {
          formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
        }
        if (inputNumbersValue.length >= 10) {
          formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
        }
      } else {
        // Not Russian phone number
        formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
      }

      input.value = formattedInputValue;
    };

    const handlePhoneKeyDown = (e) => {
      const input = e.target;
      if (
        e.key === "Backspace" &&
        getInputNumbersValue(input.value).length === 1
      ) {
        input.value = "";
      }

      return input;
    };

    const handlePhonePaste = (e) => {
      const pasted = e.clipboardData ?? window["clipboardData"];
      const input = e.target;
      const inputNumbersValue = getInputNumbersValue(input.value);

      if (pasted) {
        const pastedText = pasted.getData("Text");
        if (PATTERN.test(pastedText)) {
          input.value = inputNumbersValue;
        }
      }
    };

    return (
      <>
        <input
          className={`${className}`}
          maxLength={18}
          name={name}
          type={type}
          ref={ref}
          placeholder={placeholder}
          onInput={handlePhoneInput}
          onKeyDown={handlePhoneKeyDown}
          onPaste={handlePhonePaste}
          onBlur={onBlur}
          onFocus={onFocus}
          {...props}
        />
      </>
    );
  }
);

export default InputPhone;
