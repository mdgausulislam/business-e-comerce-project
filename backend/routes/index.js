const express = require("express");


const router = express.Router();

const userSignUpController = require('../controllers/userSignUp');
const userSignInController = require("../controllers/userSignIn");
const authToken = require("../middleware/authToken");
const userDetailsController = require("../controllers/userDetails");
const userLogout = require("../controllers/userLogout");
const allUsers = require("../controllers/allUsers");
const updateUser = require("../controllers/updateUser");
const UploadProductController = require("../controllers/uploadProduct");
const getProductController = require("../controllers/getProducts");

router.post("/signup", userSignUpController)
router.post("/signin", userSignInController)
router.get("/user-details", authToken, userDetailsController)
router.get("/userLogout", userLogout)


//admin panel 
router.get("/all-user", authToken, allUsers)
router.post("/update-user", authToken, updateUser)


//product
router.post("/upload-product", authToken, UploadProductController)
router.get("/get-product", getProductController)
// router.post("/update-product",authToken,updateProductController)
// router.get("/get-categoryProduct",getCategoryProduct)
// router.post("/category-product",getCategoryWiseProduct)
// router.post("/product-details",getProductDetails)
// router.get("/search",searchProduct)
// router.post("/filter-product",filterProductController)


module.exports = router;
