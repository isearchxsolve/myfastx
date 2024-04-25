import { Link, useNavigate } from 'react-router-dom'
import home0 from '../../../assets/home/home0.png'
import home1 from '../../../assets/home/home1.png'
import home2 from '../../../assets/home/home2.png'
import home3 from '../../../assets/home/home3.png'
import home4 from '../../../assets/home/home4.png'
import arrowRight from '../../../assets/home/arrowRight.png'
import box from '../../../assets/home/box.png'
import plus from '../../../assets/home/plus1.png'
import ping1 from '../../../assets/home/pin1.png'
import ping2 from '../../../assets/home/pin2.png'
import swap from '../../../assets/home/swap.png'
import dropOff from '../../../assets/help_center/dropOff.png'
import packaging from '../../../assets/help_center/packaging.png'
import parcelPickup from '../../../assets/help_center/parcelPickup.png'
import restrictedItems from '../../../assets/help_center/restrictedItems.png'
export default function Home(){
    const Navigate = useNavigate();

    // const states = ['--select state--', 'UP', 'Delhi', 'Rajasthan']
    // const cities = {
    //     'UP': ['--select city--', 'Jhansi','Lucknow','Kanpur'],
    //     'Delhi':['--select city--', 'India Gate', 'Siri', 'Delhi zoo', 'Red Fort'],
    //     'Rajasthan':['--select city--', 'Jodhpur', 'Jaipur', 'Ajmer', 'Kota']
    // }
    // const [selectedState1, setSelectedState1] = useState('') 
    // const [selectedState2, setSelectedState2] = useState('') 
    return(
        <div className="w-full h-auto flex flex-col items-center justify-center">
            {/* pick-up and drop-off location */}
            <div className="flex pb-20 w-full flex-col md:flex-row items-center justify-evenly bg-pale-mint">
                <div className="w-2/5 py-8">
                    <img src={home0} alt="" />
                </div>
                <div className="p-4 m-4 md:m-8 w-11/12 md:w-6/12 bg-white shadow-md rounded-xl flex flex-col items-center">
                    <h1 className='w-[86%] text-deep-green font-semibold'>Pick-up location</h1>
                    <div className="w-full flex">
                        <div className='flex w-full justify-between'>
                            <div className='flex items-center'>
                                <img className='h-4 pr-4' src={ping1} alt="" />
                                <input className="w-full py-4 text-xs md:text-sm focus:outline-none" type="text" placeholder='Pick-up location'/>
                                {/* <div className='flex flex-col md:flex-row'>
                                <select className='outline-none md:border-r-2 mr-4 p-1' onChange={(e)=>{setSelectedState1(e.target.value)}}>
                                    {
                                        states.map(state=>{
                                            return <option>{state}</option>
                                        })
                                    }
                                </select>
                                { selectedState1 && <select className='outline-none md:border-r-2 mr-4 p-1'>
                                    { 
                                    cities[selectedState1].map(city=>{
                                        return <option>{city}</option>
                                    })
                                }
                                </select>
                                }
                                <input className='outline-none' type="text" placeholder='Street/House No.'/>
                                </div> */}
                            </div>
                            {/* <div className='flex items-center'>
                                <h1 className='text-xs text-gray-500'>Now</h1>
                                <button><img className='h-3 px-2' src={down} alt="" /></button>
                            </div> */}
                        </div>
                    </div>
                    <div className=' w-full flex items-center justify-end'>
                        <div className='border-b-2 w-11/12 mr-2 my-10'>
                        </div>   
                        <div> 
                            <button>
                            <img className='h-10 w-10' src={swap} alt="" />
                            </button>
                        </div>    
                    </div>
                    <h1 className='w-[86%] text-deep-green font-semibold'>Drop-off location</h1>
                    <div className="w-full items-center flex">
                        <img className='h-7 pr-4' src={ping2} alt="" />
                        <input className='w-full py-4 text-xs md:text-sm focus:outline-none' type="text" placeholder='Drop-off loction' />
                        {/* <div className='flex flex-col md:flex-row items-center'>
                        <select className='outline-none md:border-r-2 mr-4 p-1' onChange={(e)=>{setSelectedState2(e.target.value)}}>
                                {
                                    states.map(state=>{
                                        return <option>{state}</option>
                                    })
                                }
                            </select>
                            { selectedState2 && <select className='outline-none md:border-r-2 mr-4 p-1'>
                                { 
                                cities[selectedState2].map(city=>{
                                    return <option>{city}</option>
                                })
                            }
                            </select>
                            }
                            <input className='outline-none' type="text" placeholder='Street/House No.'/>
                            </div> */}
                    </div>
                    <div className="w-full">
                        <hr />
                    </div>
                    <div className="px-4 py-4 mt-4">
                        <button className='text-xs md:text-s flex items-center focus:outline-none'>
                            <img className='h-6 mx-3' src={plus} alt="" />
                            <h1 className='text-sm font-medium'>Add Stop</h1>
                        </button>
                    </div>
                </div>
            </div>

            {/* calculate shipping rates */}
            <div className='w-full bg-pale-mint flex items-center justify-center'>
                <div className='bg-white rounded-xl w-11/12 px-4 py-6 md:py-12 flex flex-col items-center justify-center'>
                    <h1 className='text-2xl text-center md:text-5xl font-semibold text-gray-800'>Calculate <span className='text-deep-green'>MyFastX shipping rates</span> on the go</h1>
                    <p className='text-gray-800 text-base py-6 text-center'>Get shipping costs with free MyFastX courier rate calculator</p>
                    <button onClick={()=>Navigate('/shipping_rate')} className='w-11/12 md:w-6/12 bg-deep-green rounded-3xl text-white py-2 text-base md:text-lg'>Calulate now</button>
                </div>
            </div>

            {/* available vehicles */}
            <div className='w-full flex flex-col items-center justify-evenly py-8 bg-pale-mint'>
                <div>
                    <p  className='text-2xl md:text-4xl my-4 font-medium'>Available</p>
                </div>
                <div className='flex flex-col md:flex-row w-11/12 items-center justify-between'>
                    <div className='w-4/6 md:w-1/5 flex flex-col items-center justify-evenly py-8 my-4 rounded-lg bg-white'>
                        <div className="HomeCardHeading">
                            <p>MotorCycle</p>
                        </div>
                        <div className='flex justify-center'>
                            <img className='w-7/10 p-4' src={home1} alt="" />
                        </div>
                        <div className='flex text-center w-11/12'>
                            <p className='text-base items-center flex justify-center font-medium text-black text-opacity-50 font-inter'>Best for delivering documents & daily essentials</p>
                        </div>
                        <div className='flex items-start w-11/12 justify-center mt-4'>
                            <img className='px-1' src={box} alt="" />
                            <p className='text-xs lg:text-xs md:text-xxs text-gray-400 font-medium'>0.4 x 0.4 x 0.4 Meter . Up to 20 kg</p>
                        </div>
                    </div>
                    <div className='w-4/6 md:w-1/5 flex flex-col items-center justify-evenly py-8 my-4 rounded-lg bg-white'>
                        <div className="HomeCardHeading">
                            <p>3 Wheeler</p>
                        </div>
                        <div className='flex justify-center'>
                            <img className='w-7/10 p-4' src={home2} alt="" />
                        </div>
                        <div className='flex text-center w-11/12'>
                            <p className='text-base items-center flex justify-center font-medium text-black text-opacity-50 font-inter'>Best for delivering bulk fruit & vegetable essentials</p>
                        </div>
                        <div className='flex items-start w-11/12 justify-center mt-4'>
                            <img className='px-1' src={box} alt="" />
                            <p className='text-xs lg:text-xs md:text-xxs text-gray-400 font-medium'>0.4 x 0.4 x 0.4 Meter . Up to 20 kg</p>
                        </div>
                    </div>
                    <div className='w-4/6 md:w-1/5 flex flex-col items-center justify-evenly py-8 my-4 rounded-lg bg-white'>
                        <div className="HomeCardHeading">
                            <p>7ft</p>
                        </div>
                        <div className='flex justify-center'>
                            <img className='w-7/10 p-4' src={home3} alt="" />
                        </div>
                        <div className='flex text-center w-11/12'>
                            <p className='text-base items-center flex justify-center font-medium text-black text-opacity-50 font-inter'>Best for delivering furniture & commercial goods</p>
                        </div>
                        <div className='flex items-start w-11/12 justify-center mt-4'>
                            <img className='px-1' src={box} alt="" />
                            <p className='text-xs lg:text-xs md:text-xxs text-gray-400 font-medium'>0.4 x 0.4 x 0.4 Meter . Up to 20 kg</p>
                        </div>
                    </div>
                    <div className='w-4/6 md:w-1/5 flex flex-col items-center justify-evenly py-8 my-4 rounded-lg bg-white'>
                        <div className="HomeCardHeading">
                            <p>8ft</p>
                        </div>
                        <div className='flex justify-center'>
                            <img className='w-7/10 p-4' src={home4} alt="" />
                        </div>
                        <div className='flex text-center w-11/12'>
                            <p className='text-base items-center flex justify-center font-medium text-black text-opacity-50 font-inter'>Best for delivering office furniture & heavy machinery</p>
                        </div>
                        <div className='flex items-start mt-4'>
                            <img className='px-1' src={box} alt="" />
                            <p className='text-xs lg:text-xs md:text-xxs text-gray-400 font-medium'>0.4 x 0.4 x 0.4 Meter . Up to 20 kg</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-pale-mint w-full flex items-center justify-center">
                <div className="container text-primary pt-20 pb-28 px-8">
                  <h2 className="md:text-5xl text-3xl text-center font-semibold">Help Center</h2>
                  <p className="text-center mt-2">Find answers to the most common questions</p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 mt-16">
                    <div className="border border-gray-400 rounded-md text-center px-8 bg-white hover:bg-blue-100">
                      <Link className='flex items-center justify-center flex-col' to="/prohibited-items">
                        <img className='h-[200px] w-[200px]' src={restrictedItems} alt="" />
                        <h3 className="text-2xl font-semibold pt-10 mb-2 hover:text-info">Restricted items</h3>
                      </Link>       
                    </div>
                    <div className="border border-gray-400 text-center rounded-md px-8 sm:ml-2 ml-0 bg-white hover:bg-blue-100">
                      <Link className='flex items-center justify-center flex-col' to="/parcel-guide">      
                      <img className='h-[200px] w-[200px]' src={packaging} alt="" />                      
                        <h3 className="text-2xl font-semibold pt-10 mb-2 hover:text-info">Packaging</h3>
                      </Link>        
                    </div>
                    <div className="border border-gray-400 text-center rounded-md px-8 sm:ml-2 ml-0 bg-white hover:bg-blue-100">
                      <Link className='flex items-center justify-center flex-col' to="/packaging-guide">
                        <img className='h-[200px] w-[200px]' src={parcelPickup} alt="" />
                        <h3 className="text-2xl font-semibold pt-10 mb-2 hover:text-info">Parcel Pickup</h3>
                      </Link> 
                    </div>
                    <div className="relative">
                      <h3 className="absolute text-2xl font-semibold inset-x-0 bottom-0 mx-auto w-44 py-36">Coming soon..</h3>
                      <div className="border border-gray-400  opacity-20 text-center rounded-md px-8 sm:ml-2 ml-0 bg-white h-80  hover:bg-blue-100">
                           <img className='h-[200px] w-[200px]' src={dropOff} alt="" />
                          <h3 className="text-2xl font-semibold pt-10 mb-2">Drop-off</h3>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            
            {/* proceed button */}
            <div className='w-11/12 justify-center md:justify-end flex mb-12 mt-4'> 
                    <button onClick={()=>Navigate('/ordersummery_card')} className='bg-deep-green flex items-center justify-center rounded-md h-8 md:h-10 w-28'>
                        <h1 className='text-white text-sm md:text-base'>Proceed</h1>
                        <img className='h-3 pl-2 md:px-1' src={arrowRight} alt="" />
                    </button>
            </div>
        </div>
    )
}
