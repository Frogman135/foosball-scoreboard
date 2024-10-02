import { ScoreBoardProps } from '@/types';

export const data: ScoreBoardProps = {
	teams: [
		{ id: 1, name: 'Team A', members: ['Anders', 'Birgitte'] },
		{ id: 2, name: 'Team B', members: ['Christian', 'Dorte'] },
		{ id: 3, name: 'Team C', members: ['Erik', 'Freja'] },
		{ id: 4, name: 'Team D', members: ['Gustav', 'Hanne'] },
		{ id: 5, name: 'Team E', members: ['Ib', 'Jette'] },
		{ id: 6, name: 'Team F', members: ['Kasper', 'Lone'] },
		{ id: 7, name: 'Team G', members: ['Morten', 'Nina'] },
		{ id: 8, name: 'Team H', members: ['Oskar', 'Pia'] },
	],
	matches: [
		{ id: 1, team1: 1, team2: 2, result: '10 - 7' },
		{ id: 2, team1: 3, team2: 4, result: '4 - 10' },
		{ id: 3, team1: 5, team2: 6, result: '9 - 10' },
		{ id: 4, team1: 7, team2: 8, result: '6 - 10' },
		{ id: 5, team1: 1, team2: 3, result: '10 - 8' },
		{ id: 6, team1: 2, team2: 4, result: '7 - 10' },
	],
};
