export interface Team {
	id: number;
	name: string;
}

export interface Match {
	id: number;
	team1: number;
	team2: number;
	result: string;
}

export interface ScoreBoardProps {
	teams: Team[];
	matches: Match[];
}
