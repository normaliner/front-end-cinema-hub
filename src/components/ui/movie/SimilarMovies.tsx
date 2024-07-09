import { FC } from 'react';

import { IGalleryItem } from '@/components/ui/gallery/gallery.interface';
import Heading from '@/components/ui/heading/Heading';
import Gallery from '@/components/ui/gallery/Gallery'

interface ISimilarMovies {
	similarMovies: IGalleryItem[];
}

const SimilarMovies: FC<ISimilarMovies> = ({ similarMovies }) => {
	return similarMovies.length ? (
		<div className='mt-8'>
			<Heading className='mt-3'>Похожие фильмы</Heading>
			<Gallery items={similarMovies}/>
		</div>
	) : null;
};

export default SimilarMovies;
