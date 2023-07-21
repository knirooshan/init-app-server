import express from "express";
import { addVideo, updateVideo, deleteVideo, getVideo, addView, random, sub, getByTag, search } from "../controllers/video.js";
import { verifyToken } from "./verifyToken.js";

// const router = express.Router();

// //create a video
// router.post("/", verifyToken, addVideo)

// //update a video
// router.put("/:id", verifyToken, updateVideo)

// //delete a video
// router.delete("/:id", verifyToken, deleteVideo)

// //get a video
// router.get("/find/:id", getVideo)

// //add view
// router.put("/view/:id", addView)

// //random videos
// router.get("/random", random)

// //videos from subscribed channels
// router.get("/sub", verifyToken, sub)

// //videos from tag
// router.get("/tags", getByTag)

// //videos from search
// router.get("/search", search)

// export default router;

const router = express.Router();

router.post("/", verifyToken, addVideo)
router.put("/:id", verifyToken, addVideo)
router.delete("/:id", verifyToken, addVideo)
router.get("/find/:id", getVideo)
router.put("/view/:id", addView)
router.get("/random", random)
router.get("/sub", verifyToken, sub)
router.get("/tags", getByTag)
router.get("/search", search)

export default router;