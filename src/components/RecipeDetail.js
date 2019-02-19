import React from 'react';
import TUNA_IMAGE from '../static/images/tuna.jpg';

const RecipeDetail = (props) => {
    console.log("The Recipe details style is: ", props.style)

    return(
       <div style={props.style}>
           <h2>Tuna Caserole</h2>
           <img src={TUNA_IMAGE} />
           <div>
               <span>Main Course</span>
               <span>1200 calories</span>
           </div>
           <h3>Ingredients</h3>
           <ul>
               <li>1 can of tuna</li>
               <li>1/4 cup of mayo</li>
               <li>1/4 cup of chopped celery</li>
           </ul>
           <h3>Cooking Instructions</h3>
           <ol>
               <li>Open can of tuna and place in large bowl.</li>
               <li>Mix may into bowl.</li>
               <li>Mix celery into bowl.</li>
           </ol>
       </div>
    );
}

export default RecipeDetail;