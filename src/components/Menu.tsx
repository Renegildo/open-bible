import React from 'react';
import bibleData from '../bibleData.json';

interface MenuProps {
	isVisible: boolean;
	setIsVisible: (value: boolean) => void;
	setCurrrentBook: React.Dispatch<React.SetStateAction<string>>;
}

const Menu = ({ isVisible, setIsVisible, setCurrrentBook }: MenuProps) => {
	const handleClick = (book: string) => {
		setIsVisible(false);
		setCurrrentBook(book);
	}

	return (
		<div className={`bg-black/90 h-[90vh] w-full absolute left-0 top-0 mt-[10vh] overflow-scroll backdrop-blur-sm ${isVisible ? "block" : "hidden"}`}>
			<ul className="flex flex-col">
				{
					bibleData.map(book => (<button className='h-10 w-full hover:bg-white/30 flex items-center justify-center transition-colors duration-300' onClick={() => { handleClick(book.abbrev) }}>
						{book.name}
					</button>))
				}
			</ul>
		</div>
	);
}

export default Menu