'use client';

import { FC } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Controller, useForm } from 'react-hook-form';

import SkeletonLoader from '@/components/ui/SkeletonLoader';
import formstyles from '@/components/ui/form-elements/AdminForm.module.scss';
import Button from '@/components/ui/form-elements/button/Button';
import Field from '@/components/ui/form-elements/field/Field';
import Select from '@/components/ui/form-elements/select/Select';
import Heading from '@/components/ui/heading/Heading';

import { IUserEditInput, UserRole } from '@/types/user.types';

import { useUserEdit } from './useUserEdit';

const roles = [
	{
		label: 'Пользователь',
		value: UserRole.USER,
	},
	{
		label: 'Администратор',
		value: UserRole.ADMIN,
	},
];
interface IUserEdit {
	userId: string;
}

const UserEdit: FC<IUserEdit> = ({ userId }) => {
	const { user, isLoading, onSubmit } = useUserEdit(userId);

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm<IUserEditInput>({
		mode: 'onChange',
		values: {
			name: user?.name || '',
			email: user?.email || '',
			role: user?.role || UserRole.USER,
		},
	});

	return (
		<div className='px-6'>
			<Heading>Редактирование пользователя</Heading>
			<form onSubmit={handleSubmit(onSubmit)} className={formstyles.form}>
				{isLoading && (
					<div className='space-y-4'>
						{Array.from({ length: 3 }).map((_, index) => (
							<SkeletonLoader key={index} className='h-10' />
						))}
					</div>
				)}
				{!isLoading && (
					<>
						<div className={formstyles.fields}>
							<Field
								{...register('name', {
									required: 'Имя обязательно',
								})}
								placeholder='Имя'
								error={errors.name}
							/>
							<Field
								{...register('email', {
									required: 'Email обязательнен',
								})}
								placeholder='Email'
								error={errors.email}
							/>
							<Controller
								name='role'
								control={control}
								render={({ field, fieldState: { error } }) => (
									<Select
										field={field}
										error={error}
										options={roles || []}
										placeholder='Роль'
									/>
								)}
								rules={{
									required: 'Пожалуйста выберите роль пользователя',
								}}
							/>
						</div>

						<Button>Сохранить</Button>
					</>
				)}
			</form>
		</div>
	);
};

export default UserEdit;
