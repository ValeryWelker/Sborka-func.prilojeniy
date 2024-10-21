export const convertTimestamp = (timestamp) => {
  let date = timestamp.toDate();
  let mm = date.getMonth();
  let dd = date.getDate();
  let yyyy = date.getFullYear();
  let hour = date.getHours();
  let min = date.getMinutes();

  date = mm + "." + dd + "." + yyyy + " " + hour + ":" + min;
  return date;
};
