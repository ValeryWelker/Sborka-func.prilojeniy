export const cutMyStrStartMax = (str, char) => {
  if (!str) return;
  const newStr = str
    .replace(new RegExp(`.*?${char}(.*)`), "$1")
    .replace(/-/g, " ");
  return newStr[0].toUpperCase() + newStr.slice(1);
};
