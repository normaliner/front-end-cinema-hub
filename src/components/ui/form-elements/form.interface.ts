import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string;
	error?: FieldError;
}
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'default' | 'outline';
	size?: 'sm' | 'md';
}

export interface ISlugField {
	error?: FieldError;
	register: UseFormRegister<any>;
	generate: () => void;
}
