import express from "express"
import { isAdmin, requireSignIN } from "../middlewares/authmiddleware.js";
import { brainTreePaymentController, braintreeTokenController, createProductController, 
        deleteProductController, 
        getProductController, 
        getSingleProductController,
        productCategoryController,
        productCountController,
        productFiltersController,
        productListController,
        productPhotoController,
        relatedProductController,
        searchProductController,
        updateProductController
    } 
    from "../controller/productController.js";
import formidable from "express-formidable";

const router = express.Router()

//create product routes
router.post("/create-product", 
requireSignIN, 
isAdmin,
formidable(), 
createProductController
);

//update product routes
router.put("/update-product/:pid", 

requireSignIN, 
isAdmin,
formidable(), 
updateProductController
);


//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/product-filter", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword" , searchProductController);

//similar product
router.get("/related-product/:pid/:c:id", relatedProductController);

//category wise
router.get("/product-category/:slug", productCategoryController);

//payment routes
//token
router.get("/braintree/token"), braintreeTokenController;

//payments
router.post("/braintree/payment", requireSignIN, brainTreePaymentController);

export default router;