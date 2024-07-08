'use client';

import { FC } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Controller, useForm } from 'react-hook-form';

import SkeletonLoader from '@/components/ui/SkeletonLoader';
import formstyles from '@/components/ui/form-elements/AdminForm.module.scss';
import Button from '@/components/ui/form-elements/button/Button';
import Field from '@/components/ui/form-elements/field/Field';
import SlugField from '@/components/ui/form-elements/slug-field/SlugField';
import UploadField from '@/components/ui/form-elements/upload-field/UploadField';
import Heading from '@/components/ui/heading/Heading';

import { IActorEditInput } from '@/types/actor.types';

import { generateSlug } from '@/utils/string/generateSlug';

import { useActorEdit } from './useActorEdit';

interface IActorEdit {
	actorId: string;
}

const ActorEdit: FC<IActorEdit> = ({ actorId }) => {
	const { actor, isLoading, onSubmit } = useActorEdit(actorId);
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm<IActorEditInput>({
		mode: 'onChange',
		values: {
			name: actor?.name || '',
			slug: actor?.slug || '',
			photoUrl: actor?.photoUrl || '',
		},
	});

	return (
		<div className='px-6'>
			<Heading>Редактирование актера</Heading>
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
							<div>
								<SlugField
									generate={() =>
										setValue('slug', generateSlug(getValues('name')))
									}
									register={register}
									error={errors.name}
								/>
							</div>
						</div>
						<Controller
							name='photoUrl'
							control={control}
							defaultValue=''
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									onChange={onChange}
									value={value}
									error={error}
									folder='actors'
									placeholder='Фотографии'
									style={{ marginTop: 15 }}
								/>
							)}
							rules={{ required: 'Фотография обязательна!' }}
						/>
						<Button>Сохранить</Button>
					</>
				)}
			</form>
		</div>
	);
};

export default ActorEdit;
