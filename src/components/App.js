import React from 'react';
import Header from './Header';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

console.log("The process.env.API_URL is: ", API_URL)

fetch(`${API_URL}/v1/recipes`)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(error => console.log("The error is: ", error));

const App = (props) => {
    return(
        <div>
            <Header />
            <main style={{ display: 'flex' }}>
                <RecipeList style={{ flex: '3' }} />
                <RecipeDetail style={{ flex: '5' }} />
            </main>
        </div>
    );
}

export default App;