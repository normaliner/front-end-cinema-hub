import type { Metadata } from 'next';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';

import { IPageIdParam } from '@/types/page-params.types';

import UserEdit from './UserEdit';

export const metadata: Metadata = {
	title: 'Редактирование пользователя',
	...NO_INDEX_PAGE,
};

export default function UserEditPage({ params }: IPageIdParam) {
	return (
		<div>
			<UserEdit userId={params.id} />
		</div>
	);
}
