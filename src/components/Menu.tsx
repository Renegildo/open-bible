import bibleData from '../bibleData.json';

interface MenuProps {
	isVisible: boolean;
	setIsVisible: (value: boolean) => void;
}

const Menu = ({ isVisible, setIsVisible }: MenuProps) => {
	return (
		<div className={`bg-black/90 h-[90vh] w-full absolute left-0 top-0 mt-[10vh] overflow-scroll backdrop-blur-sm ${isVisible ? "block" : "hidden"}`}>
			<ul className="flex flex-col">
				{
					bibleData.map(book => (<a className='h-10 w-full hover:bg-white/30 flex items-center justify-center transition-colors duration-300' href={`#${book.name}`} onClick={() => { setIsVisible(false) }}>
						{book.name}
					</a>))
				}
			</ul>
		</div>
	)
}

export default Menu