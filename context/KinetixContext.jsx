import { createContext, useContext, useState } from 'react';

const KinetixContext = createContext();

export const KinetixProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [rentals, setRentals] = useState([]);

    const addRental = (item) => {
        setRentals(prev => [...prev, item]);
    };

    return (
        <KinetixContext.Provider value={{ user, addRental, rentals }}>
            {children}
        </KinetixContext.Provider>
    );
};

export const useKinetix = () => useContext(KinetixContext);