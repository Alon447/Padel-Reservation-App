import Navbar from '@/components/Navbar';
import PlayersAvatars from '@/components/PlayersAvatars';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Player } from '@/types/types';
import { format, parseISO } from 'date-fns';
import { he } from 'date-fns/locale';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function Reservations() {
	type Reservation = {
		id: number;
		court_id: number;
		court_name: string;
		start_time: string;
		end_time: string;
		status: 'מאושר' | 'ממתין לאישור' | 'בוטל';
		players: Player[];
	};

	// Mock data for reservations
	const mockReservations: Reservation[] = [
		{
			id: 1,
			court_id: 1,
			court_name: 'מגרש טניס 1',
			start_time: '2023-06-15T10:00:00',
			end_time: '2023-06-15T11:00:00',
			status: 'מאושר',
			players: [
				{ id: 1, name: 'ישראל ישראלי', avatar: '/placeholder.svg?height=32&width=32' },
				{ id: 2, name: 'שרה כהן', avatar: '/placeholder.svg?height=32&width=32' },
			],
		},
		{
			id: 2,
			court_id: 2,
			court_name: 'מגרש כדורסל 2',
			start_time: '2023-06-16T14:00:00',
			end_time: '2023-06-16T15:00:00',
			status: 'מאושר',
			players: [
				{ id: 1, name: 'ישראל ישראלי', avatar: '/placeholder.svg?height=32&width=32' },
				{ id: 2, name: 'שרה כהן', avatar: '/placeholder.svg?height=32&width=32' },
			],
		},
		{
			id: 3,
			court_id: 3,
			court_name: 'מגרש טניס 3',
			start_time: '2023-06-17T16:00:00',
			end_time: '2023-06-17T17:00:00',
			status: 'ממתין לאישור',
			players: [
				{ id: 1, name: 'ישראל ישראלי', avatar: '/placeholder.svg?height=32&width=32' },
				{ id: 2, name: 'שרה כהן', avatar: '/placeholder.svg?height=32&width=32' },
			],
		},
		{
			id: 4,
			court_id: 1,
			court_name: 'מגרש טניס 1',
			start_time: '2023-06-18T09:00:00',
			end_time: '2023-06-18T10:00:00',
			status: 'בוטל',
			players: [
				{ id: 1, name: 'ישראל ישראלי', avatar: '/placeholder.svg?height=32&width=32' },
				{ id: 2, name: 'שרה כהן', avatar: '/placeholder.svg?height=32&width=32' },
			],
		},
	];

	return (
		<div className="container mx-auto p-4 rtl min-h-screen w-5/6 dark:bg-gray-900 dark:text-white">
			<h1 className="font-bold text-3xl text-center mb-8">ההזמנות שלי</h1>
			<div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
				{mockReservations.map((reservation) => (
					<Card
						key={reservation.id}
						className="overflow-hidden"
					>
						<CardHeader className="pb-2">
							<CardTitle className="flex justify-between items-center">
								<span>{reservation.court_name}</span>
								<Badge className="bg-green-100 text-green-800">מאושר</Badge>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-2">
								<div className="flex items-center">
									<Calendar className="ml-2 h-4 w-4" />
									<span>{format(parseISO(reservation.start_time), 'dd/MM/yyyy', { locale: he })}</span>
								</div>
								<div className="flex items-center">
									<Clock className="ml-2 h-4 w-4" />
									<span>
										{format(parseISO(reservation.start_time), 'HH:mm', { locale: he })} -
										{format(parseISO(reservation.end_time), 'HH:mm', { locale: he })}
									</span>
								</div>
								<PlayersAvatars
									players={reservation.players}
									maxPlayers={4}
								/>
							</div>
						</CardContent>
						<CardFooter className="flex justify-between">
							<Dialog>
								<DialogTrigger asChild>
									<Button variant={'outline'}>פרטים נוספים</Button>
								</DialogTrigger>
								<DialogContent className="sm:max-w-[400px] rtl">
									<DialogHeader>
										<DialogTitle>פרטי ההזמנה</DialogTitle>
									</DialogHeader>
									<div className="space-y-6">
										<div className="space-y-2">
											<h3 className="text-lg font-semibold">פרטי המגרש</h3>
											<div className="grid grid-cols-[auto,1fr] gap-2 items-center">
												<MapPin className=" h-5 w-5 text-primary" />
												<span>{reservation.court_name}</span>
												<Calendar className=" h-5 w-5 text-primary" />
												<span>{format(parseISO(reservation.start_time), 'dd/MM/yyyy', { locale: he })}</span>
												<Clock className=" h-5 w-5 text-primary" />
												<span>
													{format(parseISO(reservation.start_time), 'HH:mm', { locale: he })} -
													{format(parseISO(reservation.end_time), 'HH:mm', { locale: he })}
												</span>
											</div>
										</div>
										<Separator />
										<div className="space-y-2">
											<h3 className="text-lg font-semibold">סטטוס ההזמנה</h3>
											<Badge className="bg-green-100 text-green-800 text-sm px-3 py-1">מאושר</Badge>
										</div>
										<Separator />
										<div className="space-y-2">
											<h3 className="text-lg font-semibold">רשימת שחקנים</h3>
											<div>
												{reservation.players.map((player) => (
													<div className="flex items-center space-x-2 ">
														<Avatar
															key={player.id}
															className="border-2 h-8 w-8"
														>
															<AvatarImage
																src={player.avatar}
																alt={player.name}
															/>
															<AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
														</Avatar>
														<div>
															<p className="font-medium">{player.name}</p>
															<p className=" text-sm text-gray-500">{player.id}</p>
														</div>
													</div>
												))}
											</div>
											<div className="mt-2">
												<Progress
													value={(reservation.players.length / 4) * 100}
													className="w-full h-2"
												/>
												<p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
													{reservation.players.length} מתוך {4} שחקנים
												</p>
											</div>
										</div>
									</div>
								</DialogContent>
							</Dialog>
							<Button
								className=" w-1/3"
								variant="destructive"
							>
								הסר
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
			<Navbar />
		</div>
	);
}
