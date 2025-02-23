import plant1 from "../../assets/Spider.avif"
import plant2 from "../../assets/plant.png"

export default function Hero() {
    return (
        <div className="w-screen h-screen">
            <div className="container mx-auto px-14 py-4 flex lg:flex-row lg:space-x-20 space-y-8 flex-col max-w-[1500px]">
                <div className="flex flex-row space-x-8  shrink-0">
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="w-5 h-5 bg-[#E6E6E6] rounded-full"></div>
                        <div className="w-5 h-5 bg-[#E6E6E6] rounded-full"></div>
                        <div className="w-5 h-5 bg-[#8BB178] rounded-full"></div>
                    </div>
                    <img src={plant2}/>
                </div>
                <div className="space-y-8 py-64">
                    <h1 className="text-5xl font-bold font-poppins text-[#9DB97F]">Aloe Vera</h1>
                    <p className="text-lg font-poppins text-[#68737F] leading-8">Aloe produces two substances, gel and latex, which are used for medicines. Aloe gel is the clear, jelly-like substance found in the inner part of the aloe plant leaf. Aloe latex comes from just under the plant's skin and is yellow in color. Some aloe products are made from the whole crushed leaf, so they contain both gel and latex. </p>
                    <div className="space-x-7 text-lg font-poppins">
                        <button className="outline py-2 px-5 bg-[#9DB97F] outline-[#9DB97F] text-white ">Buy Now</button>
                        <button className="outline py-2 px-6 ">Explore Plants</button>
                    </div>
                </div>
            </div>
        </div>
    )
}