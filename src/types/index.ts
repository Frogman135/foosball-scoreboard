export interface Team {
	id: number;
	members?: string[];
	name: string;
}

export interface TeamWithScores extends Team {
	losses: number;
	points: number;
	wins: number;
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

export interface LeaderBoardProps {
	teams: TeamWithScores[];
}
