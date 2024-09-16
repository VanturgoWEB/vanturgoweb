import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar() {
    const navObjs = [
        {'name': 'Home', 'link': '/'},
        {'name': 'B2B - Tankstelle', 'link': '/'},
        {'name': 'Transporte & Umschlaglager', 'link': '/'},
        {'name': 'Contact Us', 'link': '/'},
        {'name': 'DE', 'link': '/'},
    ]
    return (
        <div className="w-full px-[4%] flex justify-between">
            <img src={logo} alt="" />
            <div className="flex my-6">
                {navObjs.map(navObj => {
                    return <NavElement name={navObj.name} route={navObj.link}/>
                })}
            </div>
        </div>
    )
}

type navelement = {
    name: string,
    route: string,
}

function NavElement(props: navelement){
    return (
        <Link to={props.route} className="mx-4 hover:underline hover:font-medium" title={props.name}>{props.name}</Link>
    );
}