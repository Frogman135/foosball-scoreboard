import Head from 'next/head';
import localFont from 'next/font/local';
import styles from '@/styles/app.module.scss';
import ScoreBoard from '@/components/molecules/score-board/score-board';
import { Team } from '@/types';
import Container from '@/components/utilities/container/container';
import { GetServerSideProps } from 'next/types';

interface HomeProps {
	teams: Team[];
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

const Home = ({ teams }: HomeProps) => {
	return (
		<>
			<Head>
				<title>Signifly Foosball Scoreboard</title>
				<meta
					name='description'
					content='Signifly Foosball Score board'
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
						<ScoreBoard teams={teams} />
					</Container>
				</main>
			</div>
		</>
	);
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
	const resTeams = await fetch(`${process.env.URL}/api/score-board`);
	const result = await resTeams.json();
	const teams: Team[] = result.teams;

	return {
		props: {
			teams,
		},
	};
};

export default Home;
