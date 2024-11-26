import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useStore } from './store/useStore';
import { useEffect } from 'react';

function App() {
	const isDarkMode = useStore((state) => state.isDarkMode);
	useEffect(() => {
		if (isDarkMode) {
			console.log('darkmode');
			document.documentElement.classList.add('dark');
		} else {
			console.log('lightmode');
			document.documentElement.classList.remove('dark');
		}
	}, [isDarkMode]);
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/reservation"
					element={<Home />}
				/>
				<Route
					path="/profile"
					element={<Home />}
				/>
			</Routes>
		</Router>
	);
}
export default App;
