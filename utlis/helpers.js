const dayjs = require("dayjs");


//console.log (dayjs(date).format('dddd, MMMM D, YYYY'))

module.exports = {
  // Format date as DD/MM/YYsYY
  format_date: (date) => {
    return `${dayjs(date).format('dddd, MMMM D, YYYY')}`;
  },
};


// ${new Date(
//   date
//   ).getDate()}/${new Date(date).getMonth() + 1}/${new Date(date).getFullYear()