export const getmydata = () => {
  const day = new Date();
  const yyyy = day.getFullYear();
  const mm = String(day.getMonth() + 1).padStart("2", "0");
  const dd = String(day.getDay()).padStart("2", "0");
  return `${yyyy}-${mm}-${dd}`;
};
