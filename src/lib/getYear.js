export const getYear = (date_string) => {
  let date_obj = new Date(date_string);
  let year = date_obj.getFullYear();
  return year;
};
