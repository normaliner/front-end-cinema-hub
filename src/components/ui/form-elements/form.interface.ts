import { EditorProps } from 'draft-js';
import {
	ButtonHTMLAttributes,
	CSSProperties,
	InputHTMLAttributes,
} from 'react';
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

type TypeEditorField = EditorProps & IField;

export interface ITextEditor extends Omit<TypeEditorField, 'editorState'> {
	onChange: (...event: any[]) => void;
	value: string;
}
export interface IUploadFields {
	folder?: string;
	value?: string;
	onChange: (...event: any[]) => void;
	placeholder: string;
	error?: FieldError;
	style?: CSSProperties;
	isNoImage?: boolean;
}
