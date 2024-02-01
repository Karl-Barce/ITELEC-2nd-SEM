function Footer() {
    const currentTime = new Date();
    const openingTime = new Date();
    const closingTime = new Date();
  
    openingTime.setHours(12, 0, 0); // Set opening time to 12:00 PM
    closingTime.setHours(15, 58, 0); // Set closing time to 10:00 PM
  
    const isOpen = currentTime >= openingTime && currentTime <= closingTime;
    
    return <footer style ={{textAlign : "center"}}>
    {isOpen ? "We're open from 12:00 to 22:00. Come visit us or order Online" : "Sorry, we are currently closed."}
    <br />
    Current Time: {currentTime.toLocaleTimeString()} </footer>
  }
  export default Footer