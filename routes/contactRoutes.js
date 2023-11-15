const express = require("express");
const router = express.Router();
const {
  getContactsSearch,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").post(createContact);
router.route("/search").post(getContactsSearch);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
