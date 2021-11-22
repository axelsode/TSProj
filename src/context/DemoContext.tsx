import React from 'react'
interface IDemoContext {
    simpleText: string;

    setSimpleText: (text: string) => void;

}

export const DemoContext = React.createContext<IDemoContext | undefined>(undefined);



export const DemoContextProvider: React.FC = (props) => {

    const [simpleText, setSimpleText] = React.useState('')

    return (
        <DemoContext.Provider value={{
            simpleText,
            setSimpleText
        }}>
            {props.children}

        </DemoContext.Provider>

    );

}