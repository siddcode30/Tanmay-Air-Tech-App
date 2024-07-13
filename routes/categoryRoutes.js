import express from "express";
import { isAdmin, requireSignIN } from './../middlewares/authmiddleware.js';
import { categoryController, 
        createCategoryController, 
        deleteCategoryController, 
        singleCategoryController, 
        updateCategoryController } from "../controller/categoryController.js";

const router = express.Router()

//route

//create category
router.post("/create-category", requireSignIN, isAdmin, createCategoryController);

//update category
router.put("/update-category/:id", requireSignIN, isAdmin, updateCategoryController);

//getAll category
router.get("/get-category", categoryController);

//single category
router.get("/single-category/:slug", singleCategoryController );

//delete category
router.delete("/delete-category/:id", requireSignIN, isAdmin, deleteCategoryController);

export default router;