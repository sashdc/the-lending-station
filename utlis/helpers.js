module.exports = {
  // Format date as DD/MM/YYYY
  format_date: (date) => {
    return `${new Date(
      date
    ).getDate()}/${new Date(date).getMonth() + 1}/${new Date(date).getFullYear()}`;
  },
};
