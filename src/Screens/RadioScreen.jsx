import React, { createContext, useState } from 'react';
import Header from '../components/header/Header'
import Body from '../components/body/Body'
import Footer from '../components/footer/Footer'

export const FMContext = createContext()

const RadioScreen = () => {
    const [FMname, setFMname] = useState(false)

    return (
        <FMContext.Provider value={[FMname, setFMname]}>
            <Header />
            <Body />
            <Footer />
        </FMContext.Provider>
    );
};

export default RadioScreen;