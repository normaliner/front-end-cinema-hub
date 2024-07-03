import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';

import '@/assets/styles/globals.scss';

import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants';

import Providers from './providers';
import { APP_URL } from '@/config/url.config'

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: SITE_DESCRIPTION,
	metadataBase: new URL(APP_URL),
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: ['prokopenko.viktor110701@mail.ru'],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru' className={`${GeistSans.variable} ${GeistMono.variable}`}>
			<body>
				<Providers> {children}</Providers>
			</body>
		</html>
	);
}
