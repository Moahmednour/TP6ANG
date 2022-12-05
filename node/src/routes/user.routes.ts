import { create, findAll, findOne, remove, update } from "../controllers/user.controller";
module.exports = (app: any) => {
  app.get("/employee", findAll);
  app.get("/employee/:id", findOne);
  app.post("/employee", create);
  app.delete("/employee/:id", remove);
  app.put("/employee/:id", update);
};
