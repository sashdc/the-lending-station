const dayjs = require("dayjs");


//console.log (dayjs(date).format('dddd, MMMM D, YYYY'))

module.exports = {
  // Format date as DD/MM/YYsYY
  format_date: (date) => {
    return `${dayjs(date).format('dddd, MMMM D, YYYY')}`;
  },
};
