import bibleData from '../bibleData.json';

interface BibleProps {
	currentBook: string;
}

const Bible = ({ currentBook }: BibleProps) => {
	return (
		<main className='text-[#fff] overflow-scroll h-[90vh]'>
			{
				bibleData.map(book => (
					(book.abbrev === currentBook) && <div>
						<h1 className='font-black text-4xl serif text-center bg-[#22333B] py-3 mb-10 tracking-wider shadow-lg' key={book.name} id={book.name}>{book.name}</h1>
						{book.chapters.map((chapters, chapterIndex) => (
							<div className='mx-5 mb-10 max-w-[800px] min-[800px]:mx-auto'>
								<h2 className='text-3xl my-3 font-bold serif'>Capítulo {chapterIndex + 1}:</h2>
								{chapters.map((chapter, verseIndex) => (<p className='inline'>
									<span className='text-[#2EC4B6] text-xs mx-1 font-bold'>{verseIndex + 1}</span>
									{chapter}</p>))}
							</div>
						))}
					</div>
				))
			}
		</main>
	);
}

export default Bible