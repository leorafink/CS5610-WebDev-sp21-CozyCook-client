// Edamam App ID: 8bc332bb
// Edamam App Key: c65adc373fa0821d289b38c395b4a129
const EDAMAM_URL = "https://api.edamam.com/search?app_id=8bc332bb&app_key=c65adc373fa0821d289b38c395b4a129"

// local: const RECIPE_URL = "http://localhost:8080/api/users"
// local: const RECIPE_URL_NO_USERS = "http://localhost:8080/api"
const RECIPE_URL = "http://wbdv-sp21-01-cozycook-server.herokuapp.com/api/users"
const RECIPE_URL_NO_USERS = "http://wbdv-sp21-01-cozycook-server.herokuapp.com/api"

const findRecipesByTitle = (title, health) => {
    let url = EDAMAM_URL + `&q=${title}`
    for (let i = 0; i < health.length; i++) {
        url = url + `&health=${health[i]}`
    }
    return(
        fetch(url)
            .then(response => response.json())
    )
}
const findRecipeById = (id) => {
    return(
        fetch(`https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${id}&app_id=d0cab371&app_key=de9c6b500612b05267393f89cd94df76`)
            .then(response => response.json())
    )
}

const findAllRecipesForUser = (uid) => {
    return(
        fetch(`${RECIPE_URL}/${uid}/recipes`)
            .then((response) => response.json())
    )
}

const findMostRecentRecipe = (uid) => {
    return(
        fetch(`${RECIPE_URL}/${uid}/mostRecentRecipe`)
            .then((response) => response.json())
    )
}

const createRecipeForUser = (userId, recipe) => {
    return(
        fetch(`${RECIPE_URL}/${userId}/recipes`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(recipe)
        })
            .then((response) => response.json())
    )
}

const deleteRecipe = (userId, recipeId) => {
    return(fetch(`${RECIPE_URL}/${userId}/recipes/${recipeId}`,
                 {method: 'DELETE'})
            .then(response => response.json())
    )
}

const findUsersWhoLikeThisRecipe = (recipeId) => {
    return(
        fetch(`${RECIPE_URL_NO_USERS}/recipes/${recipeId}`)
            .then(response => response.json())
    )

}

const api = {
    findRecipesByTitle,
    findRecipeById,
    createRecipeForUser,
    findAllRecipesForUser,
    deleteRecipe,
    findMostRecentRecipe,
    findUsersWhoLikeThisRecipe
}

export default api