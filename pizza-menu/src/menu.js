import Pizza from "./pizza.js";
const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
function Menu() {
    return (
      <div className="menu">
        <h2>OUR MENU</h2>
        <p>
          Authentic Italian cuisine, 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
  
        <div className="pizzas">
          {pizzaData.map(pizza=><Pizza name = {pizza.name} ingredients = {pizza.ingredients} price ={pizza.price} photoName = {pizza.photoName}soldOut = {pizza.soldOut} />)}
          {/* <Pizza name = "Focaccia" description = "Bread with italian olive oil and rosemary" img="./pizzas/focaccia.jpg" qty="6"/>
          <Pizza name = "Funghi" description = "Tomato, mozarella, mushrooms, and onion" img="./pizzas/funghi.jpg" qty="6"/>
          <Pizza name = "Margherita" description = "Tomato and mozarella" img="./pizzas/margherita.jpg" qty="6"/>
          <Pizza name = "Spinaci" description = "Tomato, mozarella, spinach, and ricotta cheese" img="./pizzas/spinaci.jpg" qty="6"/>
          <Pizza name = "Salamino" description = "Tomato, mozarella, and pepperoni" img="./pizzas/salamino.jpg" qty="6"/>
          <Pizza name = "Prosciutto" description = "Tomato, mozarella, and pepperoni" img="./pizzas/prosciutto.jpg" qty="6"/> */}
          
        </div>
      </div>
    );
  }
  
  export default Menu