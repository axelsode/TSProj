import React from 'react'
export interface IDemoContext {
    simpleText: any;

    setSimpleText: (text: any) => void;

}

export const DemoContext = React.createContext<IDemoContext | undefined>(undefined);



export const DemoContextProvider: React.FC = (props) => {

    const [simpleText, setSimpleText] = React.useState([
       
      ])

    return (
        <DemoContext.Provider value={{
            simpleText: simpleText,
            setSimpleText: setSimpleText
        }}>
            {props.children}

        </DemoContext.Provider>

    );

}