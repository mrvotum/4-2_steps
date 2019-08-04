export default function sortArray(array) {
  return [...array].sort((el1, el2) => compareDates(el1.date, el2.date));
}

function compareDates(date1, date2) {
  const arr1 = date1.split('.');
  const arr2 = date2.split('.');

  if (arr1[2] !== arr2[2]) return arr2[2] - arr1[2];
  if (arr1[1] !== arr2[1]) return arr2[1] - arr1[1];
  if (arr1[0] !== arr2[0]) return arr2[0] - arr1[0];

  return 0;
}
