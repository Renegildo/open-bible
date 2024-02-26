import { useState } from "react";
import Menu from "./Menu";
import MenuButton from "./MenuButton";

interface HeaderProps {
	setCurrentBook: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ setCurrentBook }: HeaderProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="text-[#fff] p-3 fixed bg-black w-full flex justify-between h-[10vh] items-center serif text-2xl">
			<h1>Open Bible</h1>
			<MenuButton setIsOpen={setIsOpen} isOpen={isOpen} />
			<Menu isVisible={isOpen} setIsVisible={setIsOpen} setCurrrentBook={setCurrentBook} />
		</header>
	);
}

export default Header;