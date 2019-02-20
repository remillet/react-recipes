import React from 'react';
import TUNA_IMAGE from '../static/images/tuna.jpg';

const RecipeDetail = (props) => {

    const { details } = props

    if (details == null) {
        console.log('No recipe seleted.')
        return (
            <h3 style={props.style}>Select a recipe on the left to see the details.</h3>
        )
    }

    return(
       <div style={props.style}>
           <h2>{details.name}</h2>
           <img src={details.image} height="500" width="500" />
           <div>
               <span>Category: {details.category}</span>
               <br />
               <span>Calories: {details.calories}</span>
           </div>
           <h3>Ingredients</h3>
           <ul>
               {
                   details.ingredients.map((ingredient, index) => (                      
                       <li key={index}>{ingredient}</li>
                   ))                  
               }
           </ul>
           <h3>Cooking Instructions</h3>
           <ol>
           {
                   details.steps.map((step, index) => (                      
                       <li key={index}>{step}</li>
                   ))                  
               }
           </ol>
       </div>
    );
}

export default RecipeDetail;