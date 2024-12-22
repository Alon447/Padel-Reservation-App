import { CalendarCheck, CalendarCheck2, CircleUser, Home, Moon, Sun } from 'lucide-react';
import NavIcon from './NavIcon';
import { useStore } from '../store/useStore';
export default function Navbar() {
	const { toggleDarkMode, isDarkMode } = useStore();
	console.log(isDarkMode);
	return (
		<nav className="fixed bottom-0 left-0 right-0 bg-pink-200 dark:bg-gray-800 border-t dark:border-gray-700 z-50 ">
			<div className="max-w-lg mx-auto flex justify-between p-4">
				<NavIcon
					icon={<Home />}
					to="/"
					label={'בית'}
				/>
				<NavIcon
					icon={<CalendarCheck />}
					to="/bookings"
					label={'ההזמנות שלי'}
				/>
				<NavIcon
					icon={<CalendarCheck2 />}
					to="/reservation"
					label={'הזמנת מגרש'}
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
				<button
					className="bg-pink-200 dark:bg-gray-800 p-2 rounded-full border-0 hover:bg-pink-200 dark:hover:bg-gray-700"
					onClick={toggleDarkMode}
				>
					{isDarkMode ? <Sun /> : <Moon />}
				</button>
			</div>
		</nav>
	);
}
