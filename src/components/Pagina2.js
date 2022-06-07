import React, {useContext} from 'react';
import {DataContext} from '../context/DataContext';

const Pagina2 = () => {

    const {data} = useContext(DataContext);
  return (
    <div>
        <h1>Pagina2</h1>
        <hr/>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        
    </div>
  );
};

export default Pagina2;