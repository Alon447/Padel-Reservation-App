import Navbar from '../components/Navbar';

export default function WelcomePage() {
	return (
		<>
			<div className="mx-auto max-w-md w-full">
				<h1 className="text-4xl ">ברוכים הבאים להזמנת מגרשי פאדל</h1>
				<div>
					<p className="text-xl">כאן תוכלו למצוא מגרשי פאדל ולהזמין אותם בקלות ובמהירות</p>
				</div>
			</div>
			<Navbar />
		</>
	);
}
