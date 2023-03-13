const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/action", require("./action.routes"));

module.exports = router;
