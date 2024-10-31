import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Card = ({data, trending, index}) => {
  const imageURL = useSelector(state => state.moviepixData.imageURL)
  return (
    <Link to={"/"+data.media_type+"/"+data.id} className='w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden rounded relative'>
      <img
        src={imageURL+data?.poster_path}
      />
      <div className='absolute top-4'>
      {
        trending && (
          <div className='text-white py-1 px-4 backdrop-blur-3xl overflow-hidden rounded-r-full bg-blue-950/60'>
            #{index} Trending
          </div>
        )
      }
      </div>
      <div className=' text-white absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-blue-950/60 p-2'>
        <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>{data?.title || data?.name}</h2>
        <div className='text-sm text-slate-600 flex justify-between items-center'>
          <p>
            { moment(data?.release_date || data?.first_air_date).format('LL')}
          </p>
          <p className='bg-black px-1 rounded-full text-xs text-white'>
            Rating: {data.vote_average.toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card
