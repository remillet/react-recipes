import React from 'react';

const RecipeList = (props) => {

    const { recipes, onClick, style } = props;


    return (
        <div style={style}>
            <h2 className="h2">Recipes</h2>
            <ul className="list-reset"> {
                recipes.map(recipe => (
                        <li
                            className="py1 border-bottom border-bottom-dashed pointer"
                            key={recipe.id}
                            onClick={() => onClick(recipe.id)}>
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