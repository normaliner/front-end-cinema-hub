import Link from 'next/link';

import Button from '@/components/ui/form-elements/button/Button';

import { PUBLIC_URL } from '@/config/url.config';

import styles from './PremiumPlaceholder.module.scss';

const PremiumPlaceholder = () => {
	return (
		<div className={styles.placeholder}>
			<div>
				<div>
					Для просмотра фильмов необходимо оформить премиум-подписку
				</div>
				<Link href={PUBLIC_URL.premium()}>
					<Button size='sm' className={styles.btn}>
						Купить премиум
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default PremiumPlaceholder;
