'use client';

import { FC, useState } from 'react';
import { MdStarRate } from 'react-icons/md';

import { PUBLIC_URL } from '@/config/url.config';

import { useProfile } from '@/hooks/useProfile';

import { IMovie } from '@/types/movie.types';

import Heading from '../../heading/Heading';

import styles from './Content.module.scss';
import ContentList from './content-list/ContentList';
import FavoutiteButton from './favourite-button/FavoutiteButton';

interface IContent {
	movie: IMovie;
}

const Content: FC<IContent> = ({ movie }) => {
	const { user } = useProfile();

	const [rating, setRating] = useState<number>(
		Math.round(
			movie.reviews.reduce((acc, review) => acc + review.rating, 0) /
				movie.reviews.length,
		) || 0,
	);

	return (
		<div className={styles.content}>
			<Heading className={styles.heading}>{movie.title}</Heading>
			<div className={styles.details}>
				<span>{movie.year} | </span>
				<span>{movie.country} | </span>
				<span>{movie.duration} мин.</span>
			</div>
			<ContentList
				name='Жанры: '
				links={movie.genres.slice(0, 3).map(genre => ({
					id: genre.id,
					link: PUBLIC_URL.genre(genre.slug),
					title: genre.name,
				}))}
			/>
			<ContentList
				name='Актеры: '
				links={movie.actors.slice(0, 3).map(actor => ({
					id: actor.id,
					link: PUBLIC_URL.actor(actor.slug),
					title: actor.name,
				}))}
			/>
			<div className={styles.rating}>
				<MdStarRate />
				<span>{rating.toFixed(1)}</span>
			</div>
			{user && <FavoutiteButton movieId={movie.id} />}
		</div>
	);
};

export default Content;
