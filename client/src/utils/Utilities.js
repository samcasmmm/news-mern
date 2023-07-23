export function showFewWords(inputString, numWords) {
  const wordsArray = inputString.split(' ');
  const selectedWords = wordsArray.slice(0, numWords);
  const resultString = selectedWords.join(' ');
  return resultString;
}

export function CurrentDate(date = new Date()) {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const monthsOfYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const [dayOfWeek, month, day, year] = [
    daysOfWeek[date.getDay()],
    monthsOfYear[date.getMonth()],
    date.getDate(),
    date.getFullYear(),
  ];

  return `${dayOfWeek}, ${month} ${day}, ${year}`;
}
