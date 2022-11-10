import React from "react";

const ParkingContext = React.createContext({
    parkings: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) =>{},
    clearCart: () => {}
})

export default ParkingContext