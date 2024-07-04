import styles from './Sidebar.module.scss';
import Logo from './logo/Logo';
import MenuContainer from './menu-container/MenuContainer';
import Subscribe from './subscribe/Subscribe';

const Sidebar = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.sidebar}>
				<Logo />
				<MenuContainer />
				<Subscribe />
			</div>
		</div>
	);
};

export default Sidebar;
