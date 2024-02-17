import { useState } from "react";
import Menu from "./Menu";
import MenuButton from "./MenuButton";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="text-[#fff] p-3 fixed bg-black w-full flex justify-between h-[10vh] items-center serif text-2xl">
			<h1>Open Bible</h1>
			<MenuButton setIsOpen={setIsOpen} isOpen={isOpen} />
			<Menu isVisible={isOpen} setIsVisible={setIsOpen} />
		</header>
	);
}

export default Header;