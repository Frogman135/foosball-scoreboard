import Head from 'next/head';
import localFont from 'next/font/local';
import styles from '@/styles/app.module.scss';
import LeaderBoard from '@/components/molecules/leader-board/leader-board';
import { TeamWithScores } from '@/types';
import Container from '@/components/utilities/container/container';
import { GetServerSideProps } from 'next/types';

interface LeaderBoardPageProps {
	teams: TeamWithScores[];
}

const aeonikSans = localFont({
	src: [
		{
			path: './fonts/AeonikTRIAL-Light.otf',
			style: 'normal',
			weight: '100',
		},
		{
			path: './fonts/AeonikTRIAL-Regular.otf',
			style: 'normal',
			weight: '400',
		},
		{
			path: './fonts/AeonikTRIAL-Bold.otf',
			style: 'normal',
			weight: '800',
		},
	],
	variable: '--font-aeonik-sans',
});

const LeaderBoardPage = ({ teams }: LeaderBoardPageProps) => {
	return (
		<>
			<Head>
				<title>Signifly Foosball Leader board</title>
				<meta
					name='description'
					content='Signifly Leader board'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<div className={`${styles.page} ${aeonikSans.variable}`}>
				<main className={styles.main}>
					<Container>
						<LeaderBoard teams={teams} />
					</Container>
				</main>
			</div>
		</>
	);
};

export const getServerSideProps: GetServerSideProps<
	LeaderBoardPageProps
> = async () => {
	const resTeams = await fetch(`${process.env.URL}/api/leader-board`);
	const result = await resTeams.json();
	const teams: TeamWithScores[] = result.teams;

	return {
		props: {
			teams,
		},
	};
};

export default LeaderBoardPage;
