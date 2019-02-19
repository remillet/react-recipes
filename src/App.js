import path from 'path';
import React from 'react';
import IMAGE from './static/images/IMG_1554.jpg';

// class App extends React.Component {
//     render() {
//         const { animal, sound } = this.props

//         return (
//             <p>Hello from the render method: A {animal} says {sound}</p>
//         );
//     }
// }

const App = (props) => {
    const { animal, sound } = props
    // const IMAGE = path.resolve(__dirname, "src/static/images/IMG_1554.jpg")
    
    return(
        <div>
            <p>Hello from the newly updated function render method: A {animal} says {sound}</p>
            <img src={IMAGE} width="60" height="80" />
        </div>
    );
}

export default App;