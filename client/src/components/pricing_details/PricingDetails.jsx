import v1 from '../../assets/profile/v1.png' 
import v2 from '../../assets/profile/v2.png' 
import v3 from '../../assets/profile/v3.png' 
import v4 from '../../assets/profile/v4.png' 
import coins from '../../assets/profile/coins.png'
import carryBag from '../../assets/profile/carryBag.png'
import scales from '../../assets/profile/scales.png'

function pricingDetails() {
  return (
    <div className="bg-pale-mint w-full h-fit flex items-center justify-center">
            <div className="w-11/12 flex items-center justify-center">
                <div className='w-full flex flex-wrap'>
                    <div className='flex flex-col items-center md:items-baseline  w-9/12 md:w-4/12  my-8'>
                        <div className='w-full'>
                            <h1 className='font-normal text-xl'>Motocycle</h1>
                        </div>
                        <div className='p-2 h-28'>
                            <img className='h-24' src={v1} alt="" />
                        </div>
                        <div>
                            <div className='flex items-center py-1'>
                                <div>
                                    <img src={coins} alt="" />
                                </div>
                                <div className='pl-1'>
                                    <h1>Base Fare: ₹48/2km</h1>
                                </div>
                            </div>
                            <div className='flex items-center py-1'>
                                <div>
                                    <img src={coins} alt="" />
                                </div>
                                <div className='pl-1'>
                                    <h1>2-5km: ₹5.2/km</h1>
                                </div>
                            </div>
                            <div className='flex items-center py-1'>
                                <div>
                                    <img src={coins} alt="" />
                                </div>
                                <div className='pl-1'>
                                    <h1>5km: ₹5.9/km</h1>
                                </div>
                            </div>
                            <div className='flex items-center py-1'>
                                <div>
                                    <img src={carryBag} alt="" />
                                </div>
                                <div>
                                    <h1 className='pl-1'>Capacity: 20kg</h1>
                                </div>
                            </div>
                            <div className='flex items-center py-1'>
                                <div>
                                    <img src={scales} alt="" />
                                </div>
                                <div>
                                    <h1 className='pl-1'>Size: 40cm X 40cm X40cm</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center md:items-baseline w-9/12 md:w-4/12  my-8'>
                        <div className='w-full'>
                            <h1 className='font-normal text-xl'>3-Wheeler</h1>
                        </div>
                        <div className='p-2 h-28'>
                            <img className='h-24' src={v2} alt="" />
                        </div>
                        <div>
                            <div className='flex items-center py-1'>
                                <div>
                                    <img src={coins} alt="" />
                                </div>
                                <div className='pl-1'>
                                    <h1>Base Fare: ₹48/2km</h1>
                                </div>
                            </div>
                            <div className='flex items-center py-1'>
                                <div>
                                    <img src={coins} alt="" />
                                </div>
                                <div className='pl-1'>
                                    <h1>2-5km: ₹5.2/km</h1>
                                </div>
                            </div>
                            <div className='flex items-center py-1'>
                                <div>
                                    <img src={coins} alt="" />
                                </div>
                                <div className='pl-1'>
                                    <h1>5km: ₹5.9/km</h1>
                                </div>
                            </div>
                            <div className='flex items-center py-1'>
                                <div>
                                    <img src={carryBag} alt="" />
                                </div>
                                <div>
                                    <h1 className='pl-1'>Capacity: 20kg</h1>
                                </div>
                            </div>
                            <div className='flex items-center py-1'>
                                <div>
                                    <img src={scales} alt="" />
                                </div>
                                <div>
                                    <h1 className='pl-1'>Size: 40cm X 40cm X40cm</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center md:items-baseline w-9/12 md:w-4/12 my-8'>
                        <div className='w-full'>
                            <h1 className='font-normal text-xl'>7 ft</h1>
                        </div>
                        <div className='p-2 h-28'>
                            <img className='h-24' src={v3} alt="" />
                        </div>
                        <div>
                            <div className='flex items-center py-1'>
                                <div>
                                    <img src={coins} alt="" />
                                </div>
                                <div className='pl-1'>
                                    <h1>Base Fare: ₹48/2km</h1>
                                </div>
                            </div>
                            <div className='flex items-center py-1'>
                                <div>
                                    <img src={coins} alt="" />
                                </div>
                                <div className='pl-1'>
                                    <h1>2-5km: ₹5.2/km</h1>
                                </div>
                            </div>
                            <div className='flex items-center py-1'>
                                <div>
                                    <img src={coins} alt="" />
                                </div>
                                <div className='pl-1'>
                                    <h1>5km: ₹5.9/km</h1>
                                </div>
                            </div>
                            <div className='flex items-center py-1'>
                                <div>
                                    <img src={carryBag} alt="" />
                                </div>
                                <div>
                                    <h1 className='pl-1'>Capacity: 20kg</h1>
                                </div>
                            </div>
                            <div className='flex items-center py-1'>
                                <div>
                                    <img src={scales} alt="" />
                                </div>
                                <div>
                                    <h1 className='pl-1'>Size: 40cm X 40cm X40cm</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center md:items-baseline w-9/12 md:w-4/12 my-8'>
                        <div className='w-full'>
                            <h1 className='font-normal text-xl'>8 ft</h1>
                        </div>
                        <div className='p-2 h-28'>
                            <img className='h-24' src={v4} alt="" />
                        </div>
                        <div>
                            <div className='flex items-center py-1'>
                                <div>
                                    <img src={coins} alt="" />
                                </div>
                                <div className='pl-1'>
                                    <h1>Base Fare: ₹48/2km</h1>
                                </div>
                            </div>
                            <div className='flex items-center py-1'>
                                <div>
                                    <img src={coins} alt="" />
                                </div>
                                <div className='pl-1'>
                                    <h1>2-5km: ₹5.2/km</h1>
                                </div>
                            </div>
                            <div className='flex items-center py-1'>
                                <div>
                                    <img src={coins} alt="" />
                                </div>
                                <div className='pl-1'>
                                    <h1>5km: ₹5.9/km</h1>
                                </div>
                            </div>
                            <div className='flex items-center py-1'>
                                <div>
                                    <img src={carryBag} alt="" />
                                </div>
                                <div>
                                    <h1 className='pl-1'>Capacity: 20kg</h1>
                                </div>
                            </div>
                            <div className='flex items-center py-1'>
                                <div>
                                    <img src={scales} alt="" />
                                </div>
                                <div>
                                    <h1 className='pl-1'>Size: 40cm X 40cm X40cm</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default pricingDetails;