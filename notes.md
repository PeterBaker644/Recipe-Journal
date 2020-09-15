    in recipe box.js change to get all recipes to see the seeded recipes
    
    function loadRecipes() {
        API.getUserRecipes(user)
            .then(res => {
                setRecipes(res.data);
                // console.log(res.data);
            })
            .catch(err => console.log(err));
    };


       function loadRecipes() {
        API.getAllRecipes(user)
            .then(res => {
                setRecipes(res.data);
                // console.log(res.data);
            })
            .catch(err => console.log(err));
    };