import { TypeIconName } from '@/components/ui/icon'

export interface IGenre {
	id: string;
	name: string;
	slug: string;
	description: string;
	icon: TypeIconName;
}

export interface IGenreEditInput extends Omit<IGenre, 'id'> {}
