"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Navigation } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';

import './styles.css'
import HeroNftCard from "../cards/hero.nft.card";

const NftCardEffectSwiper = () => {
    return (
        <Swiper
            modules={[Navigation, EffectCards]}
            effect='cards'
            navigation
            pagination={{ clickable: true }}
            grabCursor={true}
            className="nftcard-effect-swiper"
        >
            <SwiperSlide>
                <HeroNftCard imageUrl="https://images.unsplash.com/photo-1637858868799-7f26a0640eb6" />
            </SwiperSlide>
            <SwiperSlide>
                <HeroNftCard imageUrl="https://images.unsplash.com/photo-1578632767115-351597cf2477"/>
            </SwiperSlide>
            <SwiperSlide>
                <HeroNftCard imageUrl="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5"/>
            </SwiperSlide>
            <SwiperSlide>
                <HeroNftCard imageUrl="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139"/>
            </SwiperSlide>
            <SwiperSlide>
                <HeroNftCard imageUrl="https://images.unsplash.com/photo-1634195130430-2be61200b66a" />
            </SwiperSlide>
        </Swiper>
    )
}

export default NftCardEffectSwiper