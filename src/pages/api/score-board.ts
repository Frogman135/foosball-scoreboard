import type { NextApiRequest, NextApiResponse } from 'next';
import { data as mockData } from '@/components/molecules/score-board/score-board.mock-data';
import { ScoreBoardProps } from '@/types';

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ScoreBoardProps>
) {
	res.status(200).json(mockData);
}
