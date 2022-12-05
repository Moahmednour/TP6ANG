import app from "./configs/app.config";
import { connect } from "./configs/db.config";
import router from "./routes/index";
import { seed } from "./seeder";

connect();

seed();

app.use("", router);

app.get("/", (req, res) => {
  res.send("text!");
});
let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
