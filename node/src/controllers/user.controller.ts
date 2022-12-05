import { Request, Response } from "express";
import User from "../models/user.model";

export const findAll = async (req: Request, res: Response) => {
	
  const search = req.query.search || "";
  const page: number = parseInt(req.query.page?.toString() || "1");
  const size: number = parseInt(req.query.size?.toString() || "5");

  User.find().then((data) => {
    res.send(data);
  });
};

export const findOne = async (req: Request, res: Response) => {
  const id = req.params.id;
  User.findById(id).then((data) => {
    res.send(data);
  });
}

export const create = async (req: Request, res: Response) => {
  const user = new User({
    nom: req.body.nom,
    cin: req.body.cin,
    email: req.body.email,
  });

  user.save().then((data) => {
    res.send(data);
  });
}

export const update = async (req: Request, res: Response) => {
  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body).then((data) => {
    res.send(data);
  });
}

export const remove = async (req: Request, res: Response) => {
  const id = req.params.id;
  User.findByIdAndDelete(id).then((data) => {
    res.send(data);
  });
}

