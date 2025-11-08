export function formatDate(newdate) {
  var newDate;
  if (newdate) {
    newDate = newdate;
  } else {
    newDate = new Date();
  }
  const year = newDate.getFullYear().toString();
  const day = newDate.getDate().toString();
  const month = new Intl.DateTimeFormat("en-US", { month: "numeric" }).format(
    newDate
  );
  const clock =
    newDate.getHours().toString() + ":" + newDate.getMinutes().toString();
  const date = year + " " + month + " " + day;
  return { date, clock, year, month, day, wholeDate: newDate };
}
