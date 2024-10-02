import type { NextApiRequest, NextApiResponse } from 'next';
import { data as mockData } from '@/components/molecules/leader-board/leader-board.mock-data';
import { LeaderBoardProps } from '@/types';

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<LeaderBoardProps>
) {
	res.status(200).json(mockData);
}
