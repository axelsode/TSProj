import React, { useState, useEffect, useContext } from 'react'
import en from "../language/en.json"
import sv from "../language/sv.json"
import * as RNLocalize from 'react-native-localize'
import App from '../../App'

type LanguageContextType = {
    hello: string;
  };

const LanguageContext = React.createContext<LanguageContextType>(
    {} as LanguageContextType,
  );

const languageObj = {
    'en' : en,
    'sv' : sv
}

export const LanguageContextProvider: React.FC = ({children}) => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    useEffect(() => {
        console.log(RNLocalize.getLocales())
        const currentLanguage = RNLocalize.findBestAvailableLanguage(
            Object.keys(languageObj),
        );

        setSelectedLanguage(currentLanguage?.languageTag || 'en');
    }, []);

    const value = {
        ...languageObj[selectedLanguage as 'en' | 'sv' ],
    };

    return( 
    <LanguageContext.Provider value={value}>
        <App />
    </LanguageContext.Provider>
    );
};

export const useTranslation = () => useContext(LanguageContext);