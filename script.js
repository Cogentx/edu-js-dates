let currentDate = new Date();

let locales = [
  'en-US',
  'en-CA',
  'fr-CA',
];

let dateStyles = [
  {dateStyle: 'full'},
  {dateStyle: 'long'},
  {dateStyle: 'medium'},
  {dateStyle: 'short'},
];

let datesToPrint = [
  currentDate,
];

let formattedDateObjects = [];

datesToPrint.map(dtp => {
  locales.forEach(locale => {
    dateStyles.forEach(ds => {
      const options = ds;
      formattedDateObjects.push({
        date: dtp,
        locale,
        dateStyle: ds.dateStyle,
        formattedDate: new Intl.DateTimeFormat(locale, options).format(dtp),
        formatToParts: new Intl.DateTimeFormat(locale, options).formatToParts(dtp),
      }
      );
    });
  });
});

console.table(formattedDateObjects);
const printObjects = formattedDateObjects.map((fdo) => {
  const newObj =  {
    locale: fdo.locale, 
    dateStyle: fdo.dateStyle, 
    printDate: fdo.formatToParts.reduce((full, part) => {
      return full + part.value;
    }, ''),
    dayTime: new Intl.DateTimeFormat(fdo.locale, {weekday: 'long', hour: 'numeric'}).format(fdo.date),
  };
  return newObj;
});

console.log('printObjects');
console.table(printObjects);


const options = {weekday: 'long', hour: 'numeric'};
console.log(new Intl.DateTimeFormat('en-US', options).format(currentDate));


// Relative Time Formats
const relative = new Intl.RelativeTimeFormat('en', {style: 'long', numeric: 'auto'});

console.log(relative.format(3, 'year'));
console.log(relative.format(-3, 'year'));
console.log(relative.format(3, 'day'));
console.log(relative.format(-3, 'day'));
console.log(relative.format(3, 'second'));
console.log(relative.format(-3, 'second'));

// Saturday, 5 PM
// in 3 years
// 3 years ago
// in 3 days
// 3 days ago
// in 3 seconds
// 3 seconds ago

