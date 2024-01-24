import { createContext, useState } from "react";

export const CountContext  = createContext(null);

export const CountProvider = (props) =>{
    const [count,setCount]  = useState(0);
    return <CountContext.Provider value={{count, setCount, name: "yagraj"}}>
                {props.children}
            </CountContext.Provider>
}

