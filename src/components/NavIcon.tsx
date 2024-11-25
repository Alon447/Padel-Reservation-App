import { Link } from 'react-router-dom';

type NavIconProps = {
	icon: unknown;
	to: string;
	label: string;
};
export default function NavIcon({ icon, to, label }: NavIconProps) {
	return (
		<Link
			to={to}
			className="flex flex-col items-center text-gray-800"
		>
			{icon}
			<span className="text-s mt-1 text-gray-700 dark:text-gray-300">{label}</span>
		</Link>
	);
}
