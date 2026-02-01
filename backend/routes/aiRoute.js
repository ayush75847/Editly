const express= require("express");
const router= express.Router();

const {reviewCode, fixCode, askQuestion}= require("../controllers/aiController");



router.post("/reviewCode", reviewCode );
router.post("/fixCode", fixCode);
router.post("/askQuestion", askQuestion);


module.exports= router;