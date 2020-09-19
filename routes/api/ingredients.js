const router = require("express").Router();
const ingredientsController = require("../../controllers/ingredientsController");

// Matches with "/api/ingredients"
router.route("/")
    .get(ingredientsController.findAll)
    .put(ingredientsController.updateIngredientCount);

// Matches with "/api/ingredients/limitTen"
router
    .route("/limitTen")
    .get(ingredientsController.findAllLimitTen)


module.exports = router;