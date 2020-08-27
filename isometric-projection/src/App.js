import React, { useState } from 'react';
import _ from 'lodash';
import './App.css';
import Field from './components/Field';
function App() {
  const [fields, setFields] = useState(_.range(0, 10000))

  const onFieldClick = (id) => {
    const x = id % 100 + 1;
    const y = Math.ceil((id + 1) / 100)
    const newFields = fields;
    newFields[id] = {
      coortidates: {
        x,
        y
      },
      visited: 1
    }
    setFields(newFields);
  }

  const field = (id) => <Field id={id} onFieldClick={onFieldClick} />;


  return (
    <>
      {fields.map((id) => field(id))}
    </>
  );
}



export default App;
