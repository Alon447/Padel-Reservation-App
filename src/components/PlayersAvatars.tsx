import { Player } from '@/types/types';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Progress } from './ui/progress';

export default function PlayersAvatars({ players, maxPlayers }: { players: Player[]; maxPlayers: number }) {
	return (
		<TooltipProvider>
			<div className="flex flex-col space-y-2">
				<div className="flex items-center -space-x-3">
					{players.map((player) => (
						<Tooltip key={player.id}>
							<TooltipTrigger>
								<Avatar
									key={player.id}
									className="border-2"
								>
									<AvatarImage
										src={player.avatar}
										alt={player.name}
									/>
									<AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
								</Avatar>
							</TooltipTrigger>
							<TooltipContent>
								<p>{player.name}</p>
							</TooltipContent>
						</Tooltip>
					))}
				</div>
				<div className="space-x-2">
					<Progress
						value={(players.length / maxPlayers) * 100}
						className="w-full"
					/>
					<span className="text-xs text-gray-500">
						{players.length} / {maxPlayers} שחקנים
					</span>
				</div>
			</div>
		</TooltipProvider>
	);
}
