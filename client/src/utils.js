const padZeros = (num) => {
  return num < 10 ? `0${num}` : num;
};

export const formatDateToStr = (date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${padZeros(
    date.getDate()
  )}`;
};
