import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Metadata } from 'next'
import Favourites from './Favourites'


export const metadata: Metadata = {
	title: 'Избранное',
	...NO_INDEX_PAGE,
};


export default function FavouritesPage() {
	return (
		<Favourites/>
	);
}