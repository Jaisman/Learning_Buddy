import express from "express";
import { handleUserSignUp,handleUserLogin , handleUserProfile, handleUpdateProfile} from "../controllers/user.js";

const router = express.Router();

router.post("/signup",handleUserSignUp);
router.post("/login",handleUserLogin);
router.get('/profile/:user_id',handleUserProfile);
router.put('/update_profile/:user_id',handleUpdateProfile);
export default router;