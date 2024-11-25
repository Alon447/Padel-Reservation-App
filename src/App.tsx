import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
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
