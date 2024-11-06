import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchDetails from '../hooks/useFetchDetails';
import { useSelector } from 'react-redux';
import Genres from '../store/Genres';
import moment from 'moment';
import 'moment-duration-format';

const DetailsPage = () => {
  const params = useParams();
  const imageURL = useSelector(state => state.moviepixData.imageURL);
  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`);
  
  return (
    <div>
      <div className='w-full h-[280px] relative hidden lg:block'>
        <div className='w-full h-full'>
          <img src={imageURL + data?.backdrop_path} className='h-full w-full object-cover' alt={data?.title || data?.name} />
        </div>
        <div className='absolute w-full h-full top-0 bg-gradient-to-t from-blue-950/90 to-transparent'></div>
      </div>
      <div className='container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10'>
        <div className='relative mx-auto lg:-mt-28 lg:mx-0 w-fit'>
          <img src={imageURL + data?.poster_path} className='h-80 w-60 object-cover rounded-xl lg:block' alt={data?.title || data?.name} />
        </div>
        <div>
          <h2 className='text-2xl font-bold text-white'>{data?.title || data?.name}</h2>
          <p className='text-neutral-400 italic'>{data?.tagline}</p>
          <div className='flex items-center my-3 gap-3'>
            <Genres genres={data?.genres} />
            <span>|</span>
            <p>Duration: {moment.duration(data?.runtime || data?.episode_run_time, "minutes").format("h [hrs] m [mins]")}</p>
            <span>|</span>
            <p>Rating: {data?.vote_average.toFixed(1)}</p>
          </div>
          <div>
            <h3 className='text-xl font-bold text-white mb-1'>Overview</h3>
            <p className='text-neutral-400'>{data?.overview}</p>
            <div className='flex items-center gap-3 my-3 text-center'>
              <p>Status : {data?.status}</p>
              <span>|</span>
              <p>Release date: {moment(data?.release_date || data?.last_air_date).format('LL')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
