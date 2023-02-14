import React from "react";
// import AvailableMeals from "../components/Meals/AvailableMeals";

const CartContext = React.createContext({
    items : [],
    totalAmount:0, 
    addItem :(item)=> {},
    removeItem: (id) => {}
});
export default CartContext;



// summary
// meas= mealsummary+ AvailableMeals
// UI-CARD--  white card of meals
// mealitem--meals on the card attached to AvailableMeals
// mealitemfrom-- add and input
//model in cart in app.js here we use state to manage cart
//contest create item that will managed by provider,,, contest is attached to header buttun later
// header control no of badge 
//provider repeatation by reducer and summary of items and attached it mealitem form using ref--meaalitem(cartcontext)