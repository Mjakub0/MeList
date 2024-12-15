const express = require("express");
const contentController = require("../controllers/contentController");
const authMiddleware = require("../middlewares/authMiddleware");
const validateMiddleware = require("../middlewares/validateMiddleware");
const validations = require("../validations/contentValidation");

const router = express.Router();

// Vytvoriť obsah
router.post(
  "/create",
  authMiddleware("Editor"),
  validateMiddleware(validations.createContentSchema),
  contentController.createContent
);

// Získať obsah
router.get(
  "/:id",
  authMiddleware("Viewer"),
  validateMiddleware(validations.getContentSchema),
  contentController.getContent
);

// Aktualizovať obsah
router.put(
  "/update",
  authMiddleware("Editor"),
  validateMiddleware(validations.updateContentSchema),
  contentController.updateContent
);

// Odstrániť obsah
router.delete(
  "/delete",
  authMiddleware("Editor"),
  validateMiddleware(validations.deleteContentSchema),
  contentController.deleteContent
);

module.exports = router;
