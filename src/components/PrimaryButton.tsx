import React from "react";

type primaryButtonType = {
    titleElement: React.ReactNode,
    onclick: Function
}

export default function PrimaryButton(props: primaryButtonType) {
	return (
		<button className="bg-white text-primary px-4 py-2 font-medium rounded-full border-[1.5px] border-opacity-50 border-[#788DBA80] hover:scale-105 duration-300 hover:shadow" onClick={() => props.onclick()}>
			{props.titleElement}
		</button>
	);
}
