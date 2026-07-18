import React from 'react'
import Best from '../assets/Best.jpg'
import Paris from '../assets/Paris.jpg'
import Tokyo from '../assets/Tokyo.jpg'
import Pakistan from '../assets/Pakistan.jpg'
import Venice from '../assets/Venice.jpg'
import next from '../assets/next.png'
import back from '../assets/back.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Clock, Star } from 'lucide-react'
import '../Components/Css/reactSlick.css'
 
const FeatureDestination = () => {
    const destinationJson = [
        { name: 'Saif ul muluk', img: Best, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: '69,999' },
        { name: 'Venice', img: Venice, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: '69,999' },
        { name: 'Tokyo', img: Tokyo, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: '69,999' },
        { name: 'Pakistan', img: Pakistan, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: '69,999' },
        { name: 'Paris', img: Paris, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: '69,999' },
        { name: 'Tokyo', img: Tokyo, time: '5 Days - 4 Nights', star: '3 (12 reviews)', price: '69,999' },
    ]
    return (
        <>
            <section className='w-full py-12 md:py-24 lg:pt-32 px-6 md:px-0'>
                <div className='max-w-7xl mx-auto px-4 md:px-6'>
                    <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif'>Featured Destinations</h2>
                    <hr className='text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10' />
                    <div className="slider-container">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation={{
                                nextEl: '.custom-next',
                                prevEl: '.custom-prev',
                            }}
                            pagination={{ clickable: true }}
                            spaceBetween={20}
                            slidesPerView={4}
                            loop={true}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                480: { slidesPerView: 1 },
                                600: { slidesPerView: 2 },
                                1024: { slidesPerView: 4 },
                            }}
                        >
                            {destinationJson.map((destination, index) => (
                                <SwiperSlide key={index}>
                                    <div className='overflow-hidden border shadow-lg shadow-gray-500 rounded-lg mb-5 mr-5'>
                                        <div className=''>
                                            <img
                                                src={destination.img}
                                                alt={destination.name}
                                                width={600}
                                                height={400}
                                                className='object-cover w-full h-48 hover:scale-110 transition-all'
                                            />
                                            <div className='p-4'>
                                                <p className='text-gray-500 flex items-center gap-1 text-sm mb-1'><Clock width={15} />{destination.time}</p>
                                                <h3 className='text-xl font-bold mb-2'>{destination.name}</h3>
                                                <p className='flex gap-1 items-center'><Star width={20} fill='red' />{destination.star}</p>
                                                <p className='text-gray-600 mb-4 mt-2'>Experience the beauty and culture of {destination.name}</p>
                                                <div className='flex gap-4'>
                                                    <button className='px-3 py-2 bg-red-500 rounded-md text-white'>${destination.price}</button>
                                                    <button className='px-3 py-2 bg-black rounded-md text-white'>Learn More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className='flex justify-center gap-4 mt-4'>
                            <button className='custom-prev'>
                                <img src={back} alt='prevArrow' className='w-8 h-8' />
                            </button>
                            <button className='custom-next'>
                                <img src={next} alt='nextArrow' className='w-8 h-8' />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
 
export default FeatureDestination