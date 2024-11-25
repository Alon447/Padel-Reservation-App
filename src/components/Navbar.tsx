import { CalendarCheck2, CircleUser, Home, Sun } from 'lucide-react';
import NavIcon from './NavIcon';
export default function Navbar() {
	return (
		<nav className="fixed bottom-0 left-0 right-0 bg-pink-200 dark:bg-gray-800 border-t dark:border-gray-700 z-50">
			<div className="max-w-lg mx-auto flex justify-between p-4">
				<NavIcon
					icon={<Home />}
					to="/"
					label={'בית'}
				/>
				<NavIcon
					icon={<CalendarCheck2 />}
					to="/reservation"
					label={'הזמנות'}
				/>
				<NavIcon
					icon={<CircleUser />}
					to="/profile"
					label={'פרופיל'}
				/>
				{/* <NavIcon
					icon={<Sun />}
					label={'צבע'}
				/> */}
				<button className="bg-pink-200 dark:bg-gray-800 p-2 rounded-full border-0 hover:bg-pink-200 dark:hover:bg-gray-700">
					<Sun />
				</button>
			</div>
		</nav>
	);
}