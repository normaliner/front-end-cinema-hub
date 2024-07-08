export const getMovieWordWithEnding = (
	movieCount: number,
	titles: [string, string, string] = ['фильм', 'фильма', 'фильмов'],
) => {
	const cases = [2, 0, 1, 1, 1, 2];
	return `${movieCount} ${
		titles[
			movieCount % 100 > 4 && movieCount % 100 < 20
				? 2
				: cases[movieCount % 10 < 5 ? movieCount % 10 : 5]
		]
	}`;
};
