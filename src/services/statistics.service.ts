import { axiosWithAuth } from '@/api/interceptors';

import { API_URL } from '@/config/api.config';

import { IMiddleStatisticsResponse } from '@/types/statistics.types';

class StatisticsService {
	async getMiddle() {
		const { data } = await axiosWithAuth.get<IMiddleStatisticsResponse>(
			API_URL.statistics('/middle'),
		);
		return data;
	}
}
export const statisticsService = new StatisticsService();
