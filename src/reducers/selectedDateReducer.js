export default (date = new Date(), action) => {
  switch (action.type) {
    case "SELECT_DATE":
      return action.payload;
    default:
      return date;
  }
};
