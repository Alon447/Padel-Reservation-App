import { useNavigate } from 'react-router-dom';

export default function Login() {
	const navigate = useNavigate();
	return (
		<div className="max-w-md mx-auto my-40">
			<h1 className="text-3xl font-bold mb-10">התחברות</h1>
			<form className="space-y-6">
				<div className="">
					<label className="block text-sm font-medium text-gray-700 mb-1">שם משתמש</label>
					<input
						className="input"
						type="text"
						placeholder="שם משתמש"
					></input>
				</div>
				<div className="">
					<label className="block text-sm font-medium text-gray-700 mb-1">סיסמה</label>
					<input
						className="input"
						type="password"
						placeholder="סיסמה"
					></input>
				</div>
				<button className="btn btn-primary">התחבר</button>
			</form>
			<a
				href="#"
				className="block text-left mt-4 text-m text-blue-600 hover:underline"
				onClick={() => navigate('/register/')}
			>
				שכחתי סיסמה
			</a>
		</div>
	);
}
