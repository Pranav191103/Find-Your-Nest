import express from "express";
const Router = express.Router();
import { verifyToken } from "../utils/verifyUser.js";
import {
  createListing,
  deleteListing,
  updateListing,
  getListing,
  getListings,
} from "../controllers/listingController.js";
Router.post("/create", verifyToken, createListing);
Router.delete("/delete/:id", verifyToken, deleteListing);
Router.post("/update/:id", verifyToken, updateListing);
Router.get("/get/:id", getListing);
Router.get("/get", getListings);
export default Router;
