interface IHeroNftCard {
    imageUrl:string
}
const HeroNftCard = (props:IHeroNftCard) => {
    return (
        <div className='tf-card-box style-2 rounded-2xl bg-slate-800' style={{
            width: "100%",
            height: "560px"
        }}>
            <div className='relative rounded-lg mb-4 overflow-hidden card-media h-full'>
                <img className='w-full h-full object-cover' src={props.imageUrl} alt="" />
            </div>
        </div>
    )
}

export default HeroNftCard;
