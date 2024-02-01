import "./Footer.css";
function Footer(){
    return(
    <div className="nav-footer">
        <div className="Text-container">
            <h2 className="Text">FOLLOW LIFE AT SEGA ON</h2>
        </div>
        <ul className="nav-footer">
            <li className="logo">
                <a className="logo" href="#">
                
            <img src="./images/facebook.png" />
                </a>
            </li>
            
            <li className="logo">
                <a className="logo" href="#">
                
            <img src="./images/twitter.jpg" />
                </a>
            </li>

            <li className="logo">
                <a className="logo" href="#">
                
            <img src="./images/ig.jpg" />
                </a>
            </li>

            <li className="logo">
                <a className="logo" href="#">
                
            <img src="./images/yt.webp" />
                </a>
            </li>
        </ul>
    </div>

    
    );
}
export default Footer