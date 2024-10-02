import React from 'react';
import { LeaderBoardProps } from '@/types';
import styles from './leader-board.module.scss';
import classNames from 'classnames';
import { motion } from 'framer-motion';

const MatchTable: React.FC<LeaderBoardProps> = ({ teams }) => {
	const sortedTeams = [...teams].sort((a, b) => {
		if (b.points !== a.points) return b.points - a.points;
		if (b.wins !== a.wins) return b.wins - a.wins;
		return a.losses - b.losses;
	});

	const row = {
		hidden: { opacity: 1 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const cell = {
		hidden: { opacity: 0, scale: 0.6 },
		show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
	};

	return (
		<div className={styles.tableContainer}>
			<div className={styles.table}>
				<motion.div
					animate='show'
					className={styles.row}
					initial='hidden'
					variants={row}
				>
					<motion.div
						className={classNames(styles.cell, styles.header)}
						role='columnheader'
						variants={cell}
					>
						#
					</motion.div>
					<motion.div
						className={classNames(styles.cell, styles.header)}
						role='columnheader'
						variants={cell}
					>
						Team
					</motion.div>
					<motion.div
						className={classNames(styles.cell, styles.header)}
						role='columnheader'
						variants={cell}
					>
						Won
					</motion.div>
					<motion.div
						className={classNames(styles.cell, styles.header)}
						role='columnheader'
						variants={cell}
					>
						Lost
					</motion.div>
					<motion.div
						className={classNames(styles.cell, styles.header)}
						role='columnheader'
						variants={cell}
					>
						Points
					</motion.div>
				</motion.div>
				{sortedTeams.map((team, teamIndex) => (
					<motion.div
						key={`team-${teamIndex}`}
						animate='show'
						className={styles.row}
						initial='hidden'
						variants={row}
					>
						<motion.div
							className={styles.cell}
							role='cell'
							variants={cell}
						>
							{teamIndex + 1}
						</motion.div>
						<motion.div
							className={styles.cell}
							role='cell'
							variants={cell}
						>
							{team.name}
						</motion.div>
						<motion.div
							className={styles.cell}
							role='cell'
							variants={cell}
						>
							{team.wins}
						</motion.div>
						<motion.div
							className={styles.cell}
							role='cell'
							variants={cell}
						>
							{team.losses}
						</motion.div>
						<motion.div
							className={styles.cell}
							role='cell'
							variants={cell}
						>
							{team.points}
						</motion.div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default MatchTable;
