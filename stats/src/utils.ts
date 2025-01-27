export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split("/").map(Number.parseInt);
  const [date, month, year] = dateParts;
  return new Date(year, month - 1, date);
};
