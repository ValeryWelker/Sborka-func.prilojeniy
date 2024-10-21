export const getAmount = (ticket, amount) => {
  if (ticket) {
    return amount - (amount * ticket.size) / 100;
  } else {
    return amount;
  }
};
