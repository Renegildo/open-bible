import bibleData from '../bibleData.json';

const Bible = () => {
	return (
		<main className='text-[#fff] overflow-scroll h-[90vh]'>
			{
				bibleData.map(book => (
					<div>
						<h1 className='font-black text-4xl serif text-center bg-[#22333B] py-3 mb-10 tracking-wider shadow-lg' key={book.name} id={book.name}>{book.name}</h1>
						{book.chapters.map((chapters, chapterIndex) => (
							<div className='mx-5 mb-10'>
								<h2 className='text-xl my-3 font-semibold serif'>Capítulo {chapterIndex + 1}:</h2>
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