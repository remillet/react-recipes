import React from 'react';

const RecipeList = (props) => {

    const { recipes, onClick } = props;


    return (
        <div style={props.style}>
            <h2>Recipes</h2>
            <ul> {
                recipes.map(recipe => (
                        <li key={recipe.id} onClick={() => onClick(recipe.id)}>
                            <span>{recipe.name}</span>
                            <span> - </span>
                            <span>{recipe.category}</span>
                        </li>
                    )
                )
            }
            </ul>
        </div>
    );
}

export default RecipeList;