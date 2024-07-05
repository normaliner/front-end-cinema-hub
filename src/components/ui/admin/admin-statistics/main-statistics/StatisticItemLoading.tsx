import SkeletonLoader from '@/components/ui/SkeletonLoader';

import styles from './MainStatistics.module.scss';

const StatisticItemLoading = () => {
	return (
		<div className={styles.item}>
			<div className={styles.header}>
				<SkeletonLoader className='h-5 w-24' />
				<SkeletonLoader className='size-[22px]' />
			</div>
			<h2 className={styles.value}>
				<SkeletonLoader className='h-7 w-16 mt-2' />
			</h2>
		</div>
	);
};

export default StatisticItemLoading;
