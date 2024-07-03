import { IUser } from './user.types'

export interface IAuthForm {
	name?: string;
	email: string;
	password: string;
}

export interface IAuthResponse {
	user: IUser,
	accessToken: string,
	refreshToken: string
}
