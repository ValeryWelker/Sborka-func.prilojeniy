export const SelectStyle = {
  control: (styles) => ({
    ...styles,
    border: "1px solid #80976A",
    cursor: "pointer",
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isSelected ? "#dfd3c3" : "",
    color: isFocused || isSelected ? "#000" : "",
    cursor: "pointer",
    ":active": {
      backgroundColor: "#dfd3c3",
    },
    ":hover": {
      backgroundColor: "#e4e4e4",
      transition: "all 0.15s",
    },
  }),
};
