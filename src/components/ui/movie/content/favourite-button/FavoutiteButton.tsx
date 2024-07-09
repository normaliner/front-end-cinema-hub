'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FC } from 'react';
import { AiFillHeart } from 'react-icons/ai';

import { useProfile } from '@/hooks/useProfile';

import { userService } from '@/services/user.service';

import styles from './FavoutiteButton.module.scss';

interface IFavoutiteButton {
	movieId: string;
}

const FavoutiteButton: FC<IFavoutiteButton> = ({ movieId }) => {
	const { user } = useProfile();
	const queryClient = useQueryClient();
	const { mutate, isPending } = useMutation({
		mutationKey: ['toggle favourite'],
		mutationFn: () => userService.toggleFavourites(movieId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['profile'],
			});
		},
	});

	if (!user) return null;

	const isExist = user.favourites.some(favourite => favourite.id === movieId);

	return (
		<button
			className={styles.button}
			onClick={() => mutate()}
			disabled={isPending}
		>
			{isExist ? (
				<AiFillHeart color='#f6004a' size={33} />
			) : (
				<AiFillHeart opacity={0.7} size={33} />
			)}
		</button>
	);
};

export default FavoutiteButton;
