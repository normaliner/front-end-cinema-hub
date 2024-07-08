'use client';

import { FC } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Controller, useForm } from 'react-hook-form';

import SkeletonLoader from '@/components/ui/SkeletonLoader';
import formstyles from '@/components/ui/form-elements/AdminForm.module.scss';
import Button from '@/components/ui/form-elements/button/Button';
import Field from '@/components/ui/form-elements/field/Field';
import Select from '@/components/ui/form-elements/select/Select';
import SlugField from '@/components/ui/form-elements/slug-field/SlugField';
import UploadField from '@/components/ui/form-elements/upload-field/UploadField';
import Heading from '@/components/ui/heading/Heading';

import { IMovieEditInput } from '@/types/movie.types';

import { generateSlug } from '@/utils/string/generateSlug';

import { useAdminActors } from './useAdminActors';
import { useAdminGenres } from './useAdminGenre';
import { useMovieEdit } from './useMovieEdit';

interface IMovieEdit {
	movieId: string;
}

const MovieEdit: FC<IMovieEdit> = ({ movieId }) => {
	const { movie, isLoading, onSubmit } = useMovieEdit(movieId);
	const { genres, isGenresLoading } = useAdminGenres();
	const { actors, isActorsLoading } = useAdminActors();
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm<IMovieEditInput>({
		mode: 'onChange',
		values: {
			title: movie?.title || '',
			slug: movie?.slug || '',
			country: movie?.country || '',
			duration: movie?.duration || 0,
			year: movie?.year || 0,
			poster: movie?.poster || '',
			bigPoster: movie?.bigPoster || '',
			videoUrl: movie?.videoUrl || '',
			genres: movie?.genres.map(genre => genre.id) || [],
			actors: movie?.actors.map(actor => actor.id) || [],
		},
	});

	return (
		<div className='px-6'>
			<Heading>Редактирование фильма</Heading>
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
								{...register('title', {
									required: 'Название обязательно',
								})}
								placeholder='Название'
								error={errors.title}
							/>
							<div>
								<SlugField
									generate={() =>
										setValue('slug', generateSlug(getValues('title')))
									}
									register={register}
									error={errors.title}
								/>
							</div>
							<Field
								{...register('country', {
									required: 'Страна обязательно',
								})}
								placeholder='Страна'
								error={errors.country}
								style={{ width: '31%', minHeight: '110px' }}
							/>
							<Field
								{...register('duration', {
									required: 'Длительность обязательна',
								})}
								placeholder='Длительность (в мин.)'
								error={errors.duration}
								style={{ width: '31%', minHeight: '110px'}}
							/>
							<Field
								{...register('year', {
									required: 'Год обязателен',
								})}
								placeholder='Год'
								error={errors.year}
								style={{ width: '31%', minHeight: '110px' }}
							/>
							<Controller
								name='genres'
								control={control}
								render={({ field, fieldState: { error } }) => (
									<Select
										field={field}
										error={error}
										options={genres || []}
										placeholder='Жанры'
										isMulti
										isLoading={isGenresLoading}
									/>
								)}
								rules={{
									required: 'Пожалуйста выберите хотя бы один жанр',
								}}
							/>
							<Controller
								name='actors'
								control={control}
								render={({ field, fieldState: { error } }) => (
									<Select
										field={field}
										error={error}
										options={actors || []}
										placeholder='Актеры'
										isMulti
										isLoading={isActorsLoading}
									/>
								)}
								rules={{
									required:
										'Пожалуйста выберите хотя бы одного актера',
								}}
							/>
							<Controller
								name='poster'
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
										folder='movies'
										placeholder='Постер'
									
									/>
								)}
								rules={{ required: 'Постер обязателен!' }}
							/>
							<Controller
								name='bigPoster'
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
										folder='movies'
										placeholder='Большой постер постер'
									
									/>
								)}
								rules={{ required: 'Большой постер обязателен!' }}
							/>
							<Controller
								name='videoUrl'
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
										folder='movies'
										placeholder='Видео'
										style={{ marginBottom: 35 }}
										isNoImage
									/>
								)}
								rules={{ required: 'Видео обязательно!' }}
							/>
						</div>

						<Button>Сохранить</Button>
					</>
				)}
			</form>
		</div>
	);
};

export default MovieEdit;
