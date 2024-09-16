import linkedin from "../assets/linkedin.png";
import footerlogo from "../assets/footerLogo.png";
import { Link } from "react-router-dom";

export default function Footer() {
	const footerlinks = [
		{ text: "Datenschutz", link: "/" },
		{ text: "Impressum", link: "/" },
		{ text: "Cookie-Einstellungen", link: "/" },
	];
	return (
		<div className="py-10 px-20 flex justify-between items-center border-t border-black border-opacity-10">
			<img src={footerlogo} alt="" />
			<div className="flex space-x-10">
				{footerlinks.map((footerlink) => {
					return <FooterLink link={footerlink.link} text={footerlink.text} />;
				})}
			</div>
			<a href="" target="_blank" className="hover:scale-[102%] duration-200 hover:shadow-sm">
				<img src={linkedin} />
			</a>
		</div>
	);
}

type footerlink = {
	link: string;
	text: string;
};

function FooterLink(props: footerlink) {
	return (
		<Link
			to={props.link}
			className="text-primary underline underline-offset-2 font-medium hover:font-semibold">
			{props.text}
		</Link>
	);
}
