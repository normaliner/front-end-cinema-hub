import cn from 'clsx';
import { FC } from 'react';

import { IButton } from '../form.interface';

import styles from './Button.module.scss';

const Button: FC<IButton> = ({
	children,
	className,
	variant = 'default',
	size = 'md',
	...props
}) => {
	return (
		<button
			className={cn(
				styles.button,
				className,
				size === 'sm' && 'rounded-lg px-4',
				size === 'md' && 'text-sm rounded-md',
				{
					[styles.default]: variant === 'default',
					[styles.outline]: variant === 'outline',
				},
			)}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
