import { useState } from "react";
import Bible from "./components/Bible";
import Header from "./components/Header";

const App = () => {
	const [currentBook, setCurrentBook] = useState("gn");

	return (
		<div>
			<Header setCurrentBook={setCurrentBook} />
			<div className="h-[10vh]" />
			<Bible currentBook={currentBook} />
		</div>
	);
}

export default App;