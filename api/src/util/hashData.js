const bcrypt = require("bcrypt");

const hashPassword = async (plaintextPassword) => {
  try {
    const hash = await bcrypt.hash(plaintextPassword, 10);
    return hash;
  } catch (error) {
    throw error;
  }
};

module.exports = hashPassword;
