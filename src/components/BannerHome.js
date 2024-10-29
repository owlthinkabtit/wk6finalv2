import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";


const BannerHome = () => {
  const bannerData = useSelector(state => state.moviepixData.bannerData)
  const imageURL = useSelector(state => state.moviepixData.imageURL)
  const [currentImg, setCurrentImg] = useState(0)
  
  const handleNext = () => {
    if(currentImg < bannerData.length - 1) {
      setCurrentImg(preve => preve + 1)
    }
  }
  const handlePrev = () => {
    if(currentImg > 0) {
      setCurrentImg(preve => preve - 1)
    }
  }

  return (
    <section className='w-full h-full'>
      <div className='flex min-h-full max-h-[95vh] overflow-hidden'>
        {
          bannerData.map((data, index) => {
            console.log("data", data)
            return (
              <div className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all' style={{transform:`translateX(-${currentImg * 100}%)`}}>
                <div className='w-full h-full'>
                  <img
                    src={imageURL + data.backdrop_path}
                    className='h-full w-full object-cover'
                  />
                </div>
                {/*button next and previous image*/}
                <div className='absolute top-0 w-full h-full hidden items-center justify-between px-4 group-hover:lg:flex'>
                  <button onClick={handlePrev} className='bg-white p-1 rounded-lg text-xl z-10'>
                    <FaAngleLeft />
                  </button>
                  <button onClick={handleNext} className='bg-white p-1 rounded-lg text-xl z-10'>
                    <FaAngleRight />
                  </button>
                </div>
                <div className='absolute top-0 w-full h-full bg-gradient-to-t from-blue-950 to-transparent'>
                </div>
                <div className='container mx-auto'>
                  <div className='w-full absolute bottom-0 max-w-md px-3 text-slate-300'>
                    <h2 className='font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl'>{data.title}</h2>
                    <h6 className='flex item-center gap-4'>rating<span>&bull;</span>genre<span>&bull;</span>runtime</h6>{/* going to have the genre and runtime display here*/}
                    <p className='text-ellipsis line-clamp-3 my-2'>{data.overview}</p>
                    <div className='flex item-center gap-4'>
                      <p>Rating: {data.vote_average.toFixed(1)}</p>
                    </div>
                    <button className='bg-blue-300 px-4 py-2 text-white font-bold rounded-2xl mt-3 mb-3 drop-shadow-lg hover:bg-gradient-to-l from-red-600 to-orange-500 shadow-md transition-all hover:scale-105'>
                      View Trailer
                    </button>
                  </div>

                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default BannerHome
