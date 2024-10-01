import Link from 'next/link';
import Image from 'next/image';
import styles from './main-navigation.module.scss';
import Container from '@/components/utilities/container/container';

const MainNavigation = () => {
	return (
		<header className={styles.component}>
			<Container>
				<nav className={styles.wrapper}>
					<div className={styles.logo}>
						<Image
							alt='Signifly logo'
							height={32}
							src='/logo.svg'
							width={82}
						/>
					</div>
					<nav className={styles.nav}>
						<Link
							className={styles.navLink}
							href='/'
						>
							Score board
						</Link>
						<Link
							className={styles.navLink}
							href='/leader-board'
						>
							Leader board
						</Link>
					</nav>
				</nav>
			</Container>
		</header>
	);
};

export default MainNavigation;
