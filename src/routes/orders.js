const express = require("express");
const resiveOrder = require("../controllers/resiveOrder"); 

const router = express.Router();

/* GET books listing. */

router.post("/", resiveOrder);


module.exports = router;