import Account from "../models/AccountModel.js";
import generateUniqueId from "generate-unique-id";

export const createAccount = async (req, res) => {
  try {
    const accExist = await Account.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (accExist !== null) return;

    await Account.create({ ...req.body, id: generateUniqueId() });
  } catch (err) {
    console.log(err);
  }
};
