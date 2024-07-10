'use client';

import { FC, useState } from 'react';

import { useProfile } from '@/hooks/useProfile';

import { IReview } from '@/types/review.types';

import Heading from '../../heading/Heading';
import Modal from '../../modal/Modal';

import LeaveReviewForm from './LeaveReviewForm';
import styles from './Reviews.module.scss';
import ReviewItem from './ReviewItem'

interface IReviews {
	reviews: IReview[];
	movieId: string;
}
const Reviews: FC<IReviews> = ({ movieId, reviews }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { user } = useProfile();
	return (
		<div id='reviews' className='mt-8'>

			<div className='mb-6'>
			<Heading className='mb-3'>Отзывы</Heading>
				{user && (
					<button
						className='text-white/80 hover:text-white duration-200'
						onClick={() => setIsModalOpen(true)}
					>
						Оставить отзыв
					</button>
				)}
			</div>
			{user && (
				<Modal
					isOpen={isModalOpen}
					closeModal={() => setIsModalOpen(false)}
				>
					<LeaveReviewForm
						movieId={movieId}
						setModalOpen={setIsModalOpen}
					/>
				</Modal>
			)}
			<div className={styles.reviews}>
				{reviews.length ? (
					reviews.map(review => (
						<ReviewItem key={review.id} review={review} />
					))
				) : (
					<div>У этого фильма нет ни одного отзыва</div>
				)}
			</div>
		</div>
	);
};

export default Reviews;
