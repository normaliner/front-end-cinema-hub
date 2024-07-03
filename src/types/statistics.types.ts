interface ITopMovie {
	title: string;
	views: number;
}
interface ISalesByWeek {
	date: string;
	total: number;
}

export interface IStatisticsResponse {
	topMovies: ITopMovie[];
	salesByWeek: ISalesByWeek[];
}
