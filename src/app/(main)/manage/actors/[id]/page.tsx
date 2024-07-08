import type { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';

import { IPageIdParam } from '@/types/page-params.types';

import ActorEdit from './ActorEdit';

export const metadata: Metadata = {
	title: 'Редактирование актера',
	...NO_INDEX_PAGE,
};

export default function ActorEditPage({ params }: IPageIdParam) {
	return (
		<div>
			<ActorEdit actorId={params.id} />
		</div>
	);
}
