import MainNavigation from '@/components/molecules/main-navigation/main-navigation';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className='wrapper'>
			<MainNavigation />
			<Component {...pageProps} />
		</div>
	);
}
