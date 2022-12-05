import User from "./models/user.model";

export const seed = async () => {
  console.log("Seeding...");

  let count = await User.countDocuments();

  if (count < 3) {
    let item = new User({
      nom: "jone",
      cin: "23456789",
      email: "test@email.com",
    });
    await item.save();

    item = new User({
      nom: "Mr",
      cin: "54326789",
      email: "testa@email.com",
    });
    await item.save();
  }

  console.log("Seeding done");
};
