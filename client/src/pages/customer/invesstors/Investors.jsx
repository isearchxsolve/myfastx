import investors from '../../../assets/about/inverstors.png'
import investor1 from '../../../assets/about/investor1.png'
const PrivacyPolicy=()=>{
    return(
        <div className="w-full flex flex-col items-center justify-center">
            <div className="relative w-full flex items-center justify-center">
                <div className='w-full'>
                    <img className='w-full' src={investors} alt="" />
                </div>
                <div className='absolute'>
                    <h1 className='text-white text-center font-inter font-medium text-2xl md:text-5xl'>Invest in Our Vision</h1>
                    <h1 className="text-[#ffffffad] text-lg md:text-xl text-center font-roboto">Unleashing Growth and Innovation</h1>
                </div>
            </div>
            <div className="w-11/12 flex items-center justify-center flex-col mt-8 md:mt-16">
                <div className="my-6 md:my-8 w-full ">
                    <div className='w-fit relative'>
                    <h1 className="text-xl md:text-3xl font-medium text-[#000000cc] font-roboto">Our Investors</h1>
                    <div className='absolute w-11/12 h-[1px] md:h-[2px] bg-[#888787d8] -z-10 bottom-1'></div>
                    </div>
                </div>
                <div className='w-11/12 mb-8'>
                    <img src={investor1} alt="" />
                </div>
                <div className="w-11/12 pb-5 md:pb-8">
                    <p className="font-inter text-[13px] md:text-[18px] text-black font-medium">Revlon, Inc. is a leading global beauty company with a portfolio of iconic brands that transform the lives of women and men around the world. Our Company manufactures and markets color cosmetics, hair color and care, skincare, beauty care and fragrances through a diverse portfolio of 15+ brands sold in more than 150 countries.</p>
                </div>
                <div className='w-11/12 h-[20rem]'>
                    <h1 className=' text-sm md:text-base text-gray-500'>Read more</h1>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy;