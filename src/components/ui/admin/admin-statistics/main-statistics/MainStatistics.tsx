'use client';

import { useQuery } from '@tanstack/react-query';

import Heading from '@/components/ui/heading/Heading';

import { statisticsService } from '@/services/statistics.service';

import styles from './MainStatistics.module.scss';
import StatisticItem from './StatisticItem';
import StatisticItemLoading from './StatisticItemLoading';

const MainStatistics = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['get main statistics'],
		queryFn: () => statisticsService.getMain(),
	});
	return (
		<div>
			<Heading>Статистика</Heading>
			<div className={styles.main_statistics}>
				{isLoading ? (
					Array.from({ length: 4 }).map((_, index) => (
						<StatisticItemLoading key={index} />
					))
				) : data ? (
					data.map(item => <StatisticItem key={item.id} item={item} />)
				) : (
					<div>Нет данных для статистики</div>
				)}
			</div>
		</div>
	);
};

export default MainStatistics;
