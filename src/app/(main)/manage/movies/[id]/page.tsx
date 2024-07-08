import type { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';

import { IPageIdParam } from '@/types/page-params.types';

import MovieEdit from './MovieEdit';

export const metadata: Metadata = {
	title: 'Редактирование фильма',
	...NO_INDEX_PAGE,
};

export default function MovieEditPage({ params }: IPageIdParam) {
	return (
		<div>
			<MovieEdit movieId={params.id} />
		</div>
	);
}
