export interface Match {
	opponent: number;
	result: string;
}

export interface Team {
	id: number;
	matches: Match[];
	members?: string[];
	name: string;
}

export interface TeamWithScores extends Team {
	losses: number;
	points: number;
	wins: number;
}

export interface ScoreBoardProps {
	teams: Team[];
}

export interface LeaderBoardProps {
	teams: TeamWithScores[];
}
