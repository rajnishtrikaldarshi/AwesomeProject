import React, {createContext, useState, useContext} from 'react';
import {carsData} from '../data/car';

// Initialize the context
const CarsContext = createContext();

// Create the provider component
export const CarsProvider = ({children}) => {
  const [cars, setCars] = useState(carsData);

  // Update function
  const updateCar = (id, updatedData) => {
    setCars(prevCars =>
      prevCars.map(car => (car.id === id ? {...car, ...updatedData} : car)),
    );
  };

  return (
    <CarsContext.Provider value={{cars, updateCar}}>
      {children}
    </CarsContext.Provider>
  );
};

// Hook for using the CarsContext
export const useCars = () => {
  const context = useContext(CarsContext);
  if (!context) {
    throw new Error('useCars must be used within a CarsProvider');
  }
  return context;
};
