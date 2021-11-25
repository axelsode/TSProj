import React from 'react'
export interface IContext {
    simpleText: any;

    setSimpleText: (text: any) => void;

}

export const Context = React.createContext<IContext | undefined>(undefined);



export const ContextProvider: React.FC = (props) => {

    const [simpleText, setSimpleText] = React.useState([
       
      ])

    return (
        <Context.Provider value={{
            simpleText: simpleText,
            setSimpleText: setSimpleText
        }}>
            {props.children}

        </Context.Provider>

    );

}