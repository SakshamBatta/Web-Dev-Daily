const express = require("express");
const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res.status(403).json({});
  }

  const token = authToken.split(" ")[1];
  try {
    const decode = jwt.verify(token, JWT_SECRET);
    req.userId = decode.userId;

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = authMiddleware;
