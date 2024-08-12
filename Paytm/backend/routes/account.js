const { default: mongoose } = require("mongoose");
const { Account } = require("../db");
const authMiddleware = require("../middleware");
const zod = require("zod");

const router = require("express").Router();

//get balance
router.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });

  res.json({
    balance: account.balance,
  });
});

//transfer money

router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();

  session.startTransaction();

  const account = await Account.findOne({
    userId: req.userId,
  }).session(session);

  if (!account || account.balance < req.body.amount) {
    session.abortTransaction();
    return res.status(400).json({
      message: "Insufficient Balance",
    });
  }

  const toAccount = await Account.findOne({
    userId: req.body.to,
  }).session(session);
  if (!toAccount) {
    session.abortTransaction();
    return res.status(400).json({
      message: "Invalid Account",
    });
  }

  await Account.updateOne(
    { userId: req.userId },
    { $inc: { balance: -req.body.amount } }
  ).session(session);
  await Account.updateOne(
    { userId: req.body.to },
    { $inc: { balance: req.body.amount } }
  ).session(session);

  await session.commitTransaction();

  res.json({
    message: "Transfer Successful",
  });
});

module.exports = router;
