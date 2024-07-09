import { Metadata } from 'next';

import Catalog from '@/components/ui/catalog-movies/Catalog';

import { movieService } from '@/services/movie.service';

export const metadata: Metadata = {
	title: 'Новые фильмы',
};

export const revalidate = 60;

async function getMovies() {
	const data = await movieService.getAll();
	return data;
}

export default async function ExplorerPage() {
	const data = await getMovies();
	return (
		<div className='px-6'>
			<Catalog
				title='Новые фильмы'
				description='Новые фильмы и сериалы в отличном качестве. Смотри безопасно и без ракламы!'
				movies={data}
			/>
		</div>
	);
}
