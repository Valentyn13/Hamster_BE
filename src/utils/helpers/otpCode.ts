const generateOTPCode = () => {
  // 6 digit random number
  return Math.floor(100000 + Math.random() * 900000);
};

export { generateOTPCode };
