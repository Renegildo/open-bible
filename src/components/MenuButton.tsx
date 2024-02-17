interface MenuButtonProps {
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
}

const MenuButton = ({ isOpen, setIsOpen }: MenuButtonProps) => {

	return (
		<button className="scale-150 mr-5" onClick={() => setIsOpen(!isOpen)}>
			<div className="h-4 w-4">
				<div className={`h-0.5 bg-white transition-all ${!isOpen ? "rotate-0 translate-x-0 translate-y-0" : "-rotate-45 -translate-x-0.5 translate-y-2"} mb-1`} />
				<div className={`h-0.5 bg-white transition-all ${!isOpen ? "w-full" : "w-0"} mb-1`} />
				<div className={`h-0.5 bg-white transition-all ${!isOpen ? "rotate-0 translate-x-0 translate-y-0" : "rotate-45 -translate-y-1 -translate-x-0.5"} mb-1`} />
			</div>
		</button>
	);
}

export default MenuButton;