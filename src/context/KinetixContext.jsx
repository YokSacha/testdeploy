import React, { createContext, useContext, useState, useEffect } from "react";

const KinetixContext = createContext();

export const KinetixProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [rentals, setRentals] = useState([]);
  const [cart, setCart] = useState([]);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("kinetix_user");
    const savedRentals = localStorage.getItem("kinetix_rentals");
    
    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedRentals) setRentals(JSON.parse(savedRentals));
  }, []);

  // Persist data to localStorage
  useEffect(() => {
    if (user) localStorage.setItem("kinetix_user", JSON.stringify(user));
    localStorage.setItem("kinetix_rentals", JSON.stringify(rentals));
  }, [user, rentals]);

  const login = (userData) => {
    const newUser = {
      ...userData,
      initials: userData.name.split(" ").map(n => n[0]).join(""),
      role: "ELITE RUNNER",
      score: "4.9",
      rented: rentals.length.toString(),
      level: "6",
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("kinetix_user");
  };

  const addRental = (item) => {
    const newRental = {
      ...item,
      id: Date.now(),
      rentDate: new Date().toLocaleDateString(),
      status: "กำลังเช่า",
    };
    setRentals(prev => [newRental, ...prev]);
  };

  const returnItem = (id) => {
    setRentals(prev => prev.map(item => 
      item.id === id ? { ...item, status: "คืนแล้ว" } : item
    ));
  };

  return (
    <KinetixContext.Provider value={{ 
      user, 
      rentals, 
      cart, 
      login, 
      logout, 
      addRental, 
      returnItem 
    }}>
      {children}
    </KinetixContext.Provider>
  );
};

export const useKinetix = () => {
  const context = useContext(KinetixContext);
  if (!context) {
    throw new Error("useKinetix must be used within a KinetixProvider");
  }
  return context;
};
