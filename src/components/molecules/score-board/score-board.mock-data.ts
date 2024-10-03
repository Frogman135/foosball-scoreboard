import { ScoreBoardProps } from '@/types';

export const data: ScoreBoardProps = {
	teams: [
		{
			id: 1,
			name: 'Team A',
			members: ['Anders', 'Birgitte'],
			matches: [
				{ opponent: 6, result: '10 - 7' },
				{ opponent: 8, result: '10 - 8' },
			],
		},
		{
			id: 2,
			name: 'Team B',
			members: ['Christian', 'Dorte'],
			matches: [
				{ opponent: 1, result: '7 - 10' },
				{ opponent: 6, result: '9 - 10' },
			],
		},
		{
			id: 3,
			name: 'Team C',
			members: ['Erik', 'Freja'],
			matches: [
				{ opponent: 4, result: '4 - 10' },
				{ opponent: 1, result: '8 - 10' },
			],
		},
		{
			id: 4,
			name: 'Team D',
			members: ['Gustav', 'Hanne'],
			matches: [
				{ opponent: 8, result: '10 - 4' },
				{ opponent: 2, result: '10 - 7' },
			],
		},
		{
			id: 5,
			name: 'Team E',
			members: ['Ib', 'Jette'],
			matches: [
				{ opponent: 2, result: '9 - 10' },
				{ opponent: 7, result: '10 - 7' },
			],
		},
		{
			id: 6,
			name: 'Team F',
			members: ['Kasper', 'Lone'],
			matches: [
				{ opponent: 2, result: '10 - 9' },
				{ opponent: 8, result: '10 - 5' },
			],
		},
		{
			id: 7,
			name: 'Team G',
			members: ['Morten', 'Nina'],
			matches: [
				{ opponent: 8, result: '9 - 10' },
				{ opponent: 1, result: '2 - 10' },
			],
		},
		{
			id: 8,
			name: 'Team H',
			members: ['Oskar', 'Pia'],
			matches: [
				{ opponent: 4, result: '10 - 4' },
				{ opponent: 2, result: '10 - 8' },
			],
		},
	],
};
