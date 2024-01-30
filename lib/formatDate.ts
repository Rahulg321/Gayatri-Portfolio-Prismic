export default function formatDateString(dateString: string) {
  // Create a new Date object from the provided date string
  const date = new Date(dateString);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Extract the components of the date
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);

  // Construct the readable format
  const readableFormat = `${day} ${month},${year}`;

  return readableFormat;
}
