import express from "express";
import { update, deleteUser, getUser, like, subscribe, unsubscribe, dislike } from "../controllers/user.js";
import { verifyToken } from "./verifyToken.js";

const router = express.Router();

//update user
router.put("/:id", verifyToken, update)

//delete user
router.delete("/:id", verifyToken, deleteUser)

//get a user
router.get("/find/:id", getUser)

//subscribe
router.put("/sub/:id", verifyToken, subscribe)

//unsubscribe
router.put("/unsub/:id", verifyToken, unsubscribe)

//like
router.put("/like/:videoId", verifyToken, like)

//dislike
router.put("/dislike/:videoId", verifyToken, dislike)

export default router;