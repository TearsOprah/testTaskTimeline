const container = document.getElementById('visualization');

fetch('data/shoot.json')
  .then(response => response.json())
  .then(jsonData => {
    const shootItems = jsonData.map(event => {
      const start = convertDate(event.startTimePeriod);
      const end = convertDate(event.endTimePeriod);

      return {
        id: event.id,
        content: `${event.satellite} point ${event.point}`,
        start: start,
        end: end
      };
    });

    const items = new vis.DataSet(shootItems);
    const options = {};
    const timeline = new vis.Timeline(container, items, options);
  })
  .catch(error => console.error('Error loading JSON:', error));

// функция для преобразования даты
function convertDate(dateString) {
  const [datePart, timePart] = dateString.split(' ');
  const [day, month, year] = datePart.split('.');
  const [hours, minutes, seconds] = timePart.split(':');

  return `20${year}-${month}-${day}:${hours}:${minutes}:${seconds}`;

}
