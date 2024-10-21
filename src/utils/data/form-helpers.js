export const normalizePhoneNumber = (val) => {
  const PATTERN = /\D/g;
  return val.replace(PATTERN, "");
};
