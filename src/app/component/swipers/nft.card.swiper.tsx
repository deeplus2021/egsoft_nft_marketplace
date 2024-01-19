"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import NftCard from "../cards/nft.card"

const NftCardSwiper = () => {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={1}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <NftCard imageUrl="https://images.unsplash.com/photo-1637858868799-7f26a0640eb6" />
            </SwiperSlide>
            <SwiperSlide>
                <NftCard imageUrl="https://images.unsplash.com/photo-1578632767115-351597cf2477"/>
            </SwiperSlide>
            <SwiperSlide>
                <NftCard imageUrl="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5"/>
            </SwiperSlide>
            <SwiperSlide>
                <NftCard imageUrl="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139"/>
            </SwiperSlide>
            <SwiperSlide>
                <NftCard imageUrl="https://images.unsplash.com/photo-1634195130430-2be61200b66a" />
            </SwiperSlide>
        </Swiper>
    )
}

export default NftCardSwiper