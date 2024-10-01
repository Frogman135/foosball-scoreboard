import { ScoreBoardProps } from '@/types';

export const data: ScoreBoardProps = {
	teams: [
		{ id: 1, name: 'Team A' },
		{ id: 2, name: 'Team B' },
		{ id: 3, name: 'Team C' },
		{ id: 4, name: 'Team D' },
		{ id: 5, name: 'Team E' },
		{ id: 6, name: 'Team F' },
		{ id: 7, name: 'Team G' },
		{ id: 8, name: 'Team H' },
	],
	matches: [
		{ id: 1, team1: 1, team2: 2, result: '10 - 7' },
		{ id: 2, team1: 3, team2: 4, result: '4 - 10' },
		{ id: 3, team1: 5, team2: 6, result: '9 - 10' },
		{ id: 4, team1: 7, team2: 8, result: '6 - 10' },
		{ id: 5, team1: 1, team2: 3, result: '10 - 8' },
	],
};
