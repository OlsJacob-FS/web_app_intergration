const hideNumber = (cc) => {
  try {
    if (cc.length > 16 || cc.length < 12) {
      return "Invalid Credit Card";
    } else {
      //console.log("Invalid credit card number");

      let masked = "************" + cc.substr(-4);
      return masked.toString();
    }
  } catch (error) {
    console.log("Invalid Data Type", error);
    return TypeError;
  }
};

module.exports = hideNumber;
