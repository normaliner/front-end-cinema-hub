'use client'
import SearchField from '@/components/ui/search-field/SearchField';

import styles from './Search.module.scss';
import SearchList from './search-list/SearchList';
import { useSearch } from './useSearch';

const Search = () => {
	const { handleSearch, isSuccess, searchTerm, data } = useSearch();
	return (
		<div className={styles.search}>
			<SearchField handleSearch={handleSearch} searchTerm={searchTerm} />
			{isSuccess && <SearchList movies={data || []}/>}
		</div>
	);
};

export default Search;
