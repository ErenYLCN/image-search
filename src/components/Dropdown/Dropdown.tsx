import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.scss";
import chevronDown from "../../assets/chevron-down.png";

interface Props {
	collection: string;
	setCollection: React.Dispatch<React.SetStateAction<string>>;
}

export const Dropdown = ({ collection, setCollection }: Props) => {
	const [isActive, setIsActive] = useState(false);
	const collections = [
		"Featured",
		"Wallpapers",
		"Nature",
		"Textures & Patterns",
		"Architecture",
	];

	let dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.addEventListener("mousedown", (event) => {
			if (dropdownRef.current) {
				if (!dropdownRef.current.contains(event.target as Node)) {
					setIsActive(false);
				}
			}
		});
	});

	return (
		<div className="dropdown" ref={dropdownRef}>
			<div
				className="dropdown-btn"
				onClick={(e) => setIsActive(!isActive)}
				style={collection === "Collections" ? { color: "#d5d7e5" } : {}}
			>
				<span>{collection}</span>
				<img src={chevronDown} alt="chevron-down" className="chevron-down" />
			</div>
			<div className={isActive ? "dropdown-content show" : "dropdown-content"}>
				{collections.map((collection) => {
					return (
						<div
							className="dropdown-item"
							onClick={(e) => {
								setCollection((e.target as HTMLButtonElement).innerText);
								setIsActive(false);
							}}
						>
							{collection}
						</div>
					);
				})}
			</div>
		</div>
	);
};
