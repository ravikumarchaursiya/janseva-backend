module.exports = {
  MOBILE_PATTERN: /^[6-9]\d{9}$/,
  EMAIL_PATTERN: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  AADHAAR_PATTERN: /^\d{12}$/,
  PAN_PATTERN: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
  NAME_PATTERN: /^[a-zA-Z\s]{2,50}$/,
  PINCODE_PATTERN: /^\d{6}$/,
  PASSWORD_PATTERN: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
  DATE_PATTERN: /^\d{4}-\d{2}-\d{2}$/, // YYYY-MM-DD
};