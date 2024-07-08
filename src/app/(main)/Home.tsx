'use client'
import Slider from '@/components/ui/slider/Slider'
import { ISlide } from '@/components/ui/slider/slider.interface';
import { FC } from 'react'

interface IHome {
	slides: ISlide[];
}

const Home:FC<IHome> = ({slides}) => {
	return <>
	{slides.length && <Slider slides={slides}/>}
	</>;
};

export default Home;
