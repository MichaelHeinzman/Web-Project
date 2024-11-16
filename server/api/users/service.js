const userModel = require("./model");

// Fetch all users from the database
const getAllUsers = async () => {
  return userModel.findAll();
};

// Create a new user
const createUser = async (userData) => {
  return userModel.create(userData);
};

module.exports = { getAllUsers, createUser };
