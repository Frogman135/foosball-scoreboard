import React from 'react';
import { ScoreBoardProps } from '@/types';
import styles from './score-board.module.scss';
import classNames from 'classnames';

const MatchTable: React.FC<ScoreBoardProps> = ({ matches, teams }) => {
	const tableMinWidth: string = 100 * (teams.length + 1) + 'px';

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
						<div
							key={`header-${index}`}
							className={classNames(styles.cell, styles.header)}
							role='columnheader'
						>
							{team.name}
						</div>
					))}
				</div>
				{teams.map((rowteam, rowIndex) => (
					<div
						key={`row-${rowIndex}`}
						className={styles.row}
					>
						<div
							className={classNames(styles.cell, styles.header)}
							role='cell'
						>
							{rowteam.name}
						</div>
						{teams.map((cellteam, cellIndex) => {
							const isSameTeam: boolean = rowteam.id === cellteam.id;
							const isMatched: string | undefined = matches.find(
								(match) =>
									match.team1 === rowteam.id && match.team2 === cellteam.id
							)?.result;

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
								<div
									key={`cell-${cellIndex}`}
									className={classNames(styles.cell, {
										[styles.disabled]: isSameTeam,
										[styles.highlight]: isMatched,
									})}
									role='cell'
									onMouseEnter={(e) =>
										isMatched && applyHoverStates(e.target, cellIndex)
									}
									onMouseLeave={(e) =>
										isMatched && removeHoverStates(e.target, cellIndex)
									}
								>
									{isSameTeam ? '' : isMatched ?? '-'}
								</div>
							);
						})}
					</div>
				))}
			</div>
		</div>
	);
};

export default MatchTable;
