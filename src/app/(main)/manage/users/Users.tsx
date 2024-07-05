'use client';

import AdminHeader from '@/components/ui/admin/admin-table/admin-header/AdminHeader';
import AdminList from '@/components/ui/admin/admin-table/admin-list/AdminList';
import Heading from '@/components/ui/heading/Heading';

import { useAdminUsers } from './useAdminUsers';

const Users = () => {
	const { handleSearch, users, isLoading, deleteAsync, searchTerm } =
		useAdminUsers();
	return (
		<div className='px-6'>
			<Heading>Пользователи</Heading>
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminList
				listItems={users || []}
				headerItems={['Имя', 'Почта', 'Роль']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</div>
	);
};

export default Users;
