import Navbar from '../components/Navbar';
import { useRef, useState } from 'react';
import { addDays, format, setHours, setMinutes } from 'date-fns';
import { Card, CardContent } from '@/components/ui/card';
import { he } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BookCourt() {
	const mockCourts = [
		{ id: 1, name: 'מגרש 1' },
		{ id: 2, name: 'מגרש 2' },
	];
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [availableCourts, setAvailableCourts] = useState(mockCourts);
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const dates = Array.from({ length: 14 }, (_, i) => addDays(new Date(), i));
	const timeSlots = Array.from({ length: 17 }, (_, i) => {
		const date = setMinutes(setHours(selectedDate, i + 6), 0);
		return format(date, 'HH:mm', { locale: he });
	});

	const scrollLeft = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({ left: -100, behavior: 'smooth' });
		}
	};
	const scrollRight = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({ left: 100, behavior: 'smooth' });
		}
	};
	return (
		<div className="container mx-auto p-4 rtl w-5/6 ">
			<h1 className="text-3xl font-bold mb-6 text-center">הזמנת מגרשים</h1>
			{/* upper row */}
			<div className="relative mb-8">
				<div
					ref={scrollContainerRef}
					className="flex overflow-x-auto space-x-4 pb-4"
				>
					{dates.map((date) => (
						<Card
							key={date.toISOString()}
							className={` bg-pink-200 cursor-pointer w-36 flex-shrink-0 transition-all ${
								selectedDate.toDateString() === date.toDateString() ? 'ring-2 ring-primary' : ''
							}`}
							onClick={() => setSelectedDate(date)}
						>
							<CardContent className="p-4 text-center">
								<div className="font-semibold">{format(date, 'EEEE', { locale: he })}</div>
								<div className="font-bold text-2xl">{format(date, 'd', { locale: he })}</div>
								<div className="">{format(date, 'MMMM', { locale: he })}</div>
							</CardContent>
						</Card>
					))}
				</div>
				<Button
					className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-background"
					onClick={scrollLeft}
					size="icon"
					variant={'secondary'}
					aria-label="הקודם"
				>
					<ChevronLeft className="h-4 w-4" />
				</Button>
				<Button
					className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-background"
					onClick={scrollRight}
					size="icon"
					variant={'secondary'}
					aria-label="הבא"
				>
					<ChevronRight className="h-4 w-4" />
				</Button>
			</div>
			{/* lower half of the screen */}
			<div className="mt-4">
				<h2 className="text-2xl font-semibold mb-4"> מגרשים זמינים</h2>
				<div className="overflow-x-auto">
					<table className="w-full border-collapse">
						<thead>
							<tr>
								<th className="p-2 border">שעה</th>
								{availableCourts.map((court) => (
									<th
										className="p-2 border"
										key={court.id}
									>
										{court.name}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{timeSlots.map((time) => (
								<tr key={time}>
									<td className="p-2 border font-semibold"> {time}</td>
									{availableCourts.map((court) => (
										<td
											key={`${court.id}-${time}`}
											className="p-2 border"
										>
											<Button
												size={'sm'}
												className="w-full bg-pink-200 hover:bg-pink-300"
												variant={'secondary'}
											>
												הזמן
											</Button>
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			<Navbar />
		</div>
	);
}
