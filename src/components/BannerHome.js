import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import moment from 'moment';
import axios from 'axios';

const BannerHome = () => {
  const bannerData = useSelector(state => state.moviepixData.bannerData)
  const imageURL = useSelector(state => state.moviepixData.imageURL)
  const [currentImg, setCurrentImg] = useState(0)
  const [genres, setGenres] = useState([])

  useEffect(() => {
    
    const fetchGenres = async () => {
      try {
        const movieGenresResponse = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_ACCESS_TOKEN}`
        );
        const tvGenresResponse = await axios.get(
          `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_ACCESS_TOKEN}`
        );
        const combinedGenres = [
          ...movieGenresResponse.data.genres,
          ...tvGenresResponse.data.genres
        ];
        setGenres(combinedGenres);
      } catch (error) {
       
      }
    };
    fetchGenres();
  }, []);

  const handleNext = () => {
    setCurrentImg(prev => (prev + 1) % bannerData.length)
  }
  
  const handlePrev = () => {
    setCurrentImg(prev => (prev - 1 + bannerData.length) % bannerData.length)
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)
  
    return () => clearInterval(interval)
  }, [bannerData, imageURL])
  
  return (
    <section className='w-full h-full'>
      <div className='flex min-h-full max-h-[95vh] overflow-hidden'>
        {bannerData.map((data, index) => {
         
          const contentGenres = data.genre_ids
            .map(id => genres.find(genre => genre.id === id)?.name)
            .filter(Boolean)
            .slice(0, 2);

          return (
            <div className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all' key={data.id + "bannerHome" + index} style={{transform: `translateX(-${currentImg * 100}%)`}}>
              <div className='w-full h-full'>
                <img
                  src={imageURL + data.backdrop_path}
                  className='h-full w-full object-cover'
                  alt={data.title || data.name}
                />
              </div>
              {/* button next and previous image */}
              <div className='absolute top-0 w-full h-full hidden items-center justify-between px-4 group-hover:lg:flex'>
                <button onClick={handlePrev} className='bg-white p-1 rounded-lg text-xl z-10'>
                  <FaAngleLeft />
                </button>
                <button onClick={handleNext} className='bg-white p-1 rounded-lg text-xl z-10'>
                  <FaAngleRight />
                </button>
              </div>
              <div className='absolute top-0 w-full h-full bg-gradient-to-t from-blue-950 to-transparent'></div>
              <div className='container mx-auto'>
                <div className='w-full absolute bottom-0 max-w-md px-3 text-slate-300'>
                  <h2 className='font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl'>{data?.title || data?.name}</h2>
                  <h6 className='flex items-center gap-4'>
                    {contentGenres.join(", ")}
                  </h6>
                  <p className='text-ellipsis line-clamp-3 my-2'>{data.overview}</p>
                  <div className='flex items-center gap-4'>
                    <p>Rating: {data.vote_average.toFixed(1)}</p>
                  </div>
                  <button className='bg-blue-300 px-4 py-2 text-white font-bold rounded-2xl mt-3 mb-3 drop-shadow-lg hover:bg-gradient-to-l from-red-600 to-orange-500 shadow-md transition-all hover:scale-105'>
                    View Trailer
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default BannerHome
