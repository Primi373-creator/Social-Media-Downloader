const mongoose = require('mongoose');
const User = require('../models/user');

async function getBanned(identifier) {
  try {
    const user = await User.findOne({
      $or: [
        { chatId: identifier },
        { username: identifier },
        { userId: identifier }
      ]
    });
    if (!user) {
      return { status: false };
    }
    return {
      status: user.banned,
      reason: user.banReason
    };
  } catch (error) {
    console.error("Error in getBanned:", error);
    return { status: false };
  }
}

module.exports = { getBanned };
