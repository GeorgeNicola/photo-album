const UserSchema = require("../../config/mongodb/userSchema");

const createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const user = new UserSchema({
      name: name,
      email: email,
      age: age,
    });

    const doc = await user.save();

    res.status(200).send(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getAllUsers = async (req, res) => {
  const results = await UserSchema.find().catch((error) =>
    res.status(400).json({ error })
  );
  res.json(results);
};

module.exports = {
  createUser: createUser,
  getAllUsers: getAllUsers,
};
