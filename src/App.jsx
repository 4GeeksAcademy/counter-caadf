import React from 'react';
import SimpleCounter from './componentes/counter';

const App = (props) => {
     console.log(props.digitocuatro)
    return (
        
        <>
            <SimpleCounter
                digitouno={props.digitouno}
                digitodos={props.digitodos}
                digitotres={props.digitotres}
                digitocuatro={props.digitocuatro}
            />
        </>
    )
}

export default App;