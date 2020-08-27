import React, { useState } from 'react';
import _ from 'lodash';
import './../App.css';

function App(props) {
    const [visited, visitedUpdate] = useState(false);

    return (
        <div className={visited ? "field field__visited" : "field"} onClick={() => visitedUpdate(true)}></div>
    );
}

export default App;
