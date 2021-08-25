//function setting a string to show first X characters
export const setTextToXChars = (string: string, length: number) => {
  if (length <= 0) return string;
  return !string
    ? ""
    : string.length > length
    ? string.substring(0, length) + "..."
    : string;
};

//Get current date
export const getDate = () => {
  let currentdate = new Date();

  let datetime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear();
  return datetime;
};
