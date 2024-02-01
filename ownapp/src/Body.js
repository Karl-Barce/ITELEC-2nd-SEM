import "./Body.css"

const games = [
    {name:"Sonic the Hedgehog™",img:"images/sonic.webp"},
    {name:"Like a Dragon: Infinite Wealth", img:"images/yakuza.webp"},
    {name:"Total War™",img:"images/totalwar.webp"},
    {name:"Samba de Amigo™", img:"images/samba.webp"},
    {name:"Company of Heroes™",img:"images/coh.webp"},
    {name:"Persona", img:"images/persona.webp"},
    {name:"Two Point™",img:"images/twopoint.webp"},
    {name:"Football Manager™", img:"images/fm.webp"},
    {name:"Endless Dungeon™",img:"images/endlessdungeon.webp"},
    {name:"Phantasy Star™", img:"images/phantasy-star.webp"},
]
function Body(){
    return(
        <div className="back">
            <div className="franchise">
            <h1 className="franchise-word">Our Franchises</h1>
            </div>
        <div className="row">
           
           {items}
        </div>  
        </div>
    );
}
const items = games.map((game)=>{
    return (    <div className="column">
    <Card name={game.name} img={game.img}/>
    </div>)
   })
function Card(props){
    return(
    <div className="card">
                <img className="image" src={props.img} alt ={props.name} />
                <p className="franchise-name">{props.name}</p>
            </div>
    );
}
export default Body