export function convertDate(dateString) {
  const [datePart, timePart] = dateString.split(' ');
  const [day, month, year] = datePart.split('.');
  const [hours, minutes, seconds] = timePart.split(':');

  return `20${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}
