import { TypeIconName } from '@/components/ui/icon';

export interface IMenuItem {
	icon: TypeIconName;
	value: string;
	link: string;
}

export interface IMenu {
	title: string;
	items: IMenuItem[];
}
