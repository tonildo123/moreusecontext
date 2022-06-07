import React, {createContext, useState} from 'react';

export const DataContext = createContext();

const initialDate = {

    nombre:'Tony',
    edad:30,

}

export const DataProvider = ({children}) => {
  
 const [data, setData] = useState(initialDate)
  // en value, adentro de mi DataContext.Provider va todo lo que quiero compartir 
  return (
    <DataContext.Provider value={{data, setData}}> 
        {children}
    </DataContext.Provider>
  );
};

