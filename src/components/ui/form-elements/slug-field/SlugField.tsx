import { FC } from 'react';

import Field from '../field/Field';
import { ISlugField } from '../form.interface';

import styles from './SlugField.module.scss';

const SlugField: FC<ISlugField> = ({ generate, register, error }) => {
	return (
		<div className='relative'>
			<Field
				{...register('slug', {
					required: 'Ссылка обязательно',
				})}
				placeholder='Ссылка'
				error={error}
			/>
			<div className={styles.badge} onClick={generate}>
				сгенерировать
			</div>
		</div>
	);
};

export default SlugField;
