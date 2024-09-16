import { useState } from "react";

type inputField = {
	label: string;
	placeholder?: string | "";
	textarea?: boolean | false;
};

export default function InputField(props: inputField) {
    const [isFocused, setIsFocused] = useState(false)
	return (
		<div className="space-y-2 flex flex-col w-full">
			<span className={`text-base  + ${isFocused ? 'font-bold' : 'font-medium'} `}>{props.label}</span>
			{props.textarea ? (
				<textarea
					className="border-[1.5px] border-[#788DBA] border-opacity-50 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
					placeholder={props.placeholder}
					name={props.label}
					id={props.label}
                    rows={5}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    
				/>
			) : (
				<input
					className="border-[1.5px] border-[#788DBA] border-opacity-50 rounded-lg px-4 py-3 focus:outline-none focus:border-green-500"
					type="text"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={props.placeholder}
					name={props.label}
					id={props.label}
				/>
			)}
		</div>
	);
}
