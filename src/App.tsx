import Bible from "./components/Bible";
import Header from "./components/Header";

const App = () => {
	return (
		<div>
			<Header />
			<div className="h-[10vh]" />
			<Bible />
		</div>
	);
}

export default App;