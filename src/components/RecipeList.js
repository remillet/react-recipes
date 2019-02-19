import React from 'react';

const RecipeList = (props) => {

    return(
        <div style={props.style}>
            <h2>Recipes</h2>
            <ul>
                <li key='1'>
                    <span>Tuna Caserole</span>
                    <span>Main Course</span>
                </li>
                <li>
                    <span>Grilled Salmon</span>
                    <span>Main Course</span>
                </li>
                <li>
                    <span>Cheesecake</span>
                    <span>Dessert</span>
                </li>
            </ul>
        </div>
    );
}

export default RecipeList;