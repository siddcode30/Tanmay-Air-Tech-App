import express from "express";
import {
    forgotPasswordController,
    getAllOrdersController,
    getOrdersController,
    loginController,
    orderStatusController,
    registerController,
    testController,
    updateProfileController,
    
} from "../controller/authController.js";
import { isAdmin, 
    requireSignIN 
} from "../middlewares/authmiddleware.js";

//rount object
const router = express.Router();

//routing
//register || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login",loginController);

//Forgot password || POST
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test",requireSignIN,isAdmin, testController);

//protected user routes auth
router.get("/user-auth", requireSignIN, (req,res) => {
    res.status(200).send({ok:true});
});

//protected admin routes auth
router.get("/admin-auth", requireSignIN,isAdmin, (req,res) => {
    res.status(200).send({ok:true});
});

//update profile
router.put("/profile", requireSignIN, updateProfileController);

//orders
router.get("/orders", requireSignIN, getOrdersController);

//all orders
router.get("/all-orders", requireSignIN, isAdmin, getAllOrdersController);

//order status update
router.put("/order-status/:orderId", requireSignIN, isAdmin, orderStatusController);

export default router;