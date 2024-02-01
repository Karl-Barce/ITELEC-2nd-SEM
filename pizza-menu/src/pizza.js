
function Pizza(props) {
    return (
      <div className="pizza">
        <img src={props.photoName} alt={props.name} />
        <div>
          <h3>{props.name}</h3>
          <p>{props.ingredients}</p>
          <span>{props.price}</span>
          <p>{props.soldOut}</p>
  
        </div>
      </div>
    );
  }
  export default Pizza