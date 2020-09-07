const router = require("express").Router();
const recipesController = require("../../controllers/recipesController");

// Matches with "/api/recipes"
router.route("/")
    .get(recipesController.findAll)
    .post(recipesController.create);

// Matches with "/api/recipes/:_id"
router
    .route("/:_id")
    .get(recipesController.findById)
    .put(recipesController.update)
    .delete(recipesController.remove);

module.exports = router;