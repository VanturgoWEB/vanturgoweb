import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar() {
    // const [selected, changeSelected] = useState('Home')
    const navObjs = [
        { 'name': 'Home', 'link': '/' },
        { 'name': 'B2B - Tankstelle', 'link': '/tankstelle' },
        { 'name': 'Transporte & Umschlaglager', 'link': '/Transporte' },
        { 'name': 'Contact Us', 'link': '/Contact' },
        { 'name': 'DE', 'link': '/DE' },
    ]
    // useEffect(() => {
        const location = useLocation()
        console.log(location)
        const selected = location.pathname
    // }, [])
    return (
        <div className="w-full px-[4%] flex justify-between items-center">
            <img src={logo} alt="" className="h-5 object-contain" />
            <div className="flex my-6">
                {navObjs.map(navObj => {
                    return (
                        selected == navObj.link ?
                            <NavElement name={navObj.name} route={navObj.link} selected={true} />
                            :
                            <NavElement name={navObj.name} route={navObj.link} />
                    )
                })}
            </div>
        </div>
    )
}

type navelement = {
    name: string,
    route: string,
    selected?: boolean | false,
}

function NavElement(props: navelement) {
    return (
        <Link to={props.route} className={`mx-4 ${props.selected ? ' text-primary font-bold' : 'hover:underline'}`} title={props.name}>{props.name}</Link>
    );
}