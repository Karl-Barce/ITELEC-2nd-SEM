import "./Header.css";
function Header(){
    return(
    <div className="nav">
        <ul className="nav">
            <li className="text-type">
                <a className="text-type" href="#">
                
            <img src="./images/sega-logo.png" />
                </a>
            </li>
             <li className="text-type">
                <a className="text-type" href="#">CAREERS</a>
            </li>
            <li className="text-type">
                <a className="text-type" href="#">SEGA SHOP</a>
            </li>
            <li className="text-type">
                <a className="text-type" href="#">NEWS</a>
            </li>
            <li className="text-type">
                <a className="text-type" href="#">PRIVACY HUB</a>
            </li>
            <li className="text-type">
                <a className="text-type" href="#">SUPPORT</a>
            </li>
            <li className="text-type-right">
                <a className="text-type-right" href="#">NEWSLETTER SIGNUP</a>
            </li>
        </ul>
    </div>

    
    );
}
export default Header