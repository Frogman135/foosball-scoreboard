import React from 'react';
import { Match, ScoreBoardProps } from '@/types';
import styles from './score-board.module.scss';
import classNames from 'classnames';
import { motion } from 'framer-motion';

const MatchTable: React.FC<ScoreBoardProps> = ({ teams }) => {
	const tableMinWidth: string = 150 * (teams.length + 1) + 'px';

	return (
		<div className={styles.tableContainer}>
			<div
				className={styles.table}
				style={{ minWidth: tableMinWidth }}
			>
				<div className={styles.row}>
					<div
						className={classNames(styles.cell, styles.disabled)}
						role='columnheader'
					></div>
					{teams.map((team, index) => (
						<motion.div
							key={`header-${index}`}
							animate={{ opacity: 1, scale: 1 }}
							className={classNames(styles.cell, styles.header)}
							initial={{ opacity: 0, scale: 0.6 }}
							role='columnheader'
							transition={{ duration: 0.3, delay: index * 0.1 }}
						>
							<div className={styles.cellTitle}>{team.name}</div>
							<div className={styles.cellText}>{team.members?.join(', ')}</div>
						</motion.div>
					))}
				</div>
				{teams.map((homeTeam, rowIndex) => (
					<div
						key={`row-${rowIndex}`}
						className={styles.row}
					>
						<motion.div
							animate={{ opacity: 1, scale: 1 }}
							className={classNames(styles.cell, styles.header)}
							initial={{ opacity: 0, scale: 0.6 }}
							role='cell'
							transition={{ duration: 0.3, delay: rowIndex * 0.1 }}
						>
							<div className={styles.cellTitle}>{homeTeam.name}</div>
							<div className={styles.cellText}>
								{homeTeam.members?.join(', ')}
							</div>
						</motion.div>
						{teams.map((awayTeam, cellIndex) => {
							const isSameTeam: boolean = homeTeam.id === awayTeam.id;
							const isMatched: Match | undefined = homeTeam.matches.find(
								(match) => match.opponent === awayTeam.id
							);

							const isTeamOneWinner: boolean = (() => {
								if (!isMatched) return false;
								const scores = isMatched.result.match(/\d+/g);
								if (!scores || scores.length < 2) return false;
								return parseInt(scores[0]) > parseInt(scores[1]);
							})();

							const winningTeam = teams.find(
								(team) =>
									team.id ===
									(isTeamOneWinner ? homeTeam.id : isMatched?.opponent)
							)?.name;

							const queryHeaders = (
								target: EventTarget,
								index: number
							): HTMLElement[] => {
								const immediateParent = (target as HTMLElement).parentElement;
								const rowHeaderCell = immediateParent?.children[0];
								const columnHeaderCell =
									immediateParent?.parentElement?.children[0].children[
										index + 1
									];

								if (!rowHeaderCell || !columnHeaderCell) {
									return [];
								}

								return [
									rowHeaderCell as HTMLElement,
									columnHeaderCell as HTMLElement,
								];
							};

							const applyHoverStates = (
								target: EventTarget,
								index: number
							): void => {
								const headerCells: HTMLElement[] = queryHeaders(target, index);

								if (!headerCells.length) {
									return;
								}

								headerCells.forEach((cell) => cell.classList.add(styles.hover));
							};

							const removeHoverStates = (
								target: EventTarget,
								index: number
							): void => {
								const headerCells: HTMLElement[] = queryHeaders(target, index);

								if (!headerCells.length) {
									return;
								}

								headerCells.forEach((cell) =>
									cell.classList.remove(styles.hover)
								);
							};

							return (
								<motion.div
									key={`cell-${cellIndex}`}
									animate={{ opacity: 1, scale: 1 }}
									className={classNames(styles.cell, {
										[styles.disabled]: isSameTeam,
										[styles.highlight]: isMatched,
									})}
									initial={{ opacity: 0, scale: 0.6 }}
									role='cell'
									onMouseEnter={(e) =>
										isMatched && applyHoverStates(e.target, cellIndex)
									}
									onMouseLeave={(e) =>
										isMatched && removeHoverStates(e.target, cellIndex)
									}
									transition={{ duration: 0.3, delay: cellIndex * 0.1 }}
								>
									<div className={styles.cellTitle}>
										{isSameTeam ? '' : isMatched?.result ?? '-'}
									</div>
									{isMatched && (
										<div className={styles.cellText}>🏆 {winningTeam}</div>
									)}
								</motion.div>
							);
						})}
					</div>
				))}
			</div>
		</div>
	);
};

export default MatchTable;
