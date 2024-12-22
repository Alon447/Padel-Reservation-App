import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useStore } from './store/useStore';
import { useEffect } from 'react';
import BookCourt from './pages/BookCourt';
import Reservations from './pages/Reservations';

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
					path="/bookings"
					element={<Reservations />}
				/>
				<Route
					path="/reservation"
					element={<BookCourt />}
				/>
				<Route
					path="/profile"
					element={<Home />}
				/>
				<Route
					path="/admin"
					element={<Home />}
				/>
			</Routes>
		</Router>
	);
}
export default App;
