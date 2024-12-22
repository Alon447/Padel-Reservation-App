export default function Register() {
	return (
		<div className="max-w-md mx-auto">
			<h1 className="text-3xl font-bold mb-8">הרשמה</h1>
			<form className="space-y-6">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">שם משתמש</label>
					<input
						className="input"
						type="text"
						placeholder="שם משתמש"
					></input>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">סיסמה</label>
					<input
						className="input"
						type="password"
						placeholder="סיסמה"
					></input>
				</div>

				<button className="btn btn-primary">הרשם</button>
			</form>
		</div>
	);
}
