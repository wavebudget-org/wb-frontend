export const moneyInNaira = (amount) => {
  if (amount) {
    return amount.toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
    });
  }
};
