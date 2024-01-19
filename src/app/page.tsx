import MainHero from "./component/heros/main.hero";
import NftCardEffectSwiper from "./component/swipers/nft.card.effect.swiper";
import NftCardSwiper from "./component/swipers/nft.card.swiper";

export default function Index() {
  return (
    <>
    <MainHero/>
      <div className="mx-auto w-full max-w-[2560px] px-4 sm:px-8 xl:px-16 overflow-x-hidden">
        <div className="flex items-center justify-between pb-3 lg:pb-4">
          <span className="font-extrabold leading-10 mr-4">
            Trendg in PFPs
          </span>
        </div>
        <NftCardSwiper />
      </div>
    </>

  )
}
