import NftCardEffectSwiper from "../swipers/nft.card.effect.swiper";

const MainHero = () => {
  return (
    <div className="relative w-full ml-auto mr-auto pr-14 pl-15 pt-12 max-w-full">
      <div className="flex h-full"> {/* Güncellenen satır */}
        {/* Sol taraf */}
        <div className="w-1/2 h-full"> {/* Güncellenen satır */}
          <div className="pt-10 pl-28">
            <h1 className="text-5xl font-semibold pb-10">
              Create, Explore & Collect Digital Art NFTs
            </h1>
            <p className="">
                Buy and sell NFTs from the world’s top artists. More than 1.000 premium digital artworks are available to be yours!
            </p>
          </div>
        </div>

        {/* Sağ taraf */}
        <div className="w-1/2 h-full"> {/* Güncellenen satır */}
          <NftCardEffectSwiper />
        </div>
      </div>
    </div>
  );
};

export default MainHero;
