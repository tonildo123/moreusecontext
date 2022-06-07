import React, {useContext} from 'react';
import { DataContext } from '../context/DataContext';

const data = {
  nombre: 'Carlos',
  edad:29,
}

const ButtonChange = () => {

  const {setData} = useContext(DataContext)
  return (
    <div>
        <button className='btn btn-primary'
                onClick={()=>setData(data)}
        
        >Cambiar data</button>
        <hr/>
    </div>
  );
};

export default ButtonChange;