import React from 'react';
import TUNA_IMAGE from '../static/images/tuna.jpg';
import classNames from 'classnames';

const RecipeDetail = (props) => {

    const { details, style, className } = props

    if (details == null) {
        console.log('No recipe seleted.')
        return (
            <p
                style={style}
                className={
                    classNames('h3 p2 bg-white italic center',
                        className)
                }
            >
                Select a recipe on the left to see the details.
            </p>
        )
    }

    return(
        <div style={style} 
            className={
                classNames('h3 p2 bg-white',
                    className)
            }
        >
           <h2 className="h2 center">{details.name}</h2>
           <img className="fit" src={details.image} />
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