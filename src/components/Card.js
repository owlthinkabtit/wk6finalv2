import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Card = ({data, trending, index, media_type }) => {
  const imageURL = useSelector(state => state.moviepixData.imageURL)

  const mediaType = data.media_type ?? media_type
  return (
    <Link to={"/"+mediaType+"/"+data.id} className='w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded relative hover:scale-105 transition-all'>
      {
        data?.poster_path ? (
          <img
        src={imageURL+data?.poster_path}
        />

        ) : (
          <div className='bg-blue-900/25 rounded-md w-full h-full flex justify-center items-center'>
            Image not Found
          </div>
        )

      }
      
      
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
            Rating: {data.vote_average ? data.vote_average.toFixed(1) : "N/A"}
          </p>
        </div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-white">
     
      <img 
        src={`https://image.tmdb.org/t/p/w200${data.profile_path}`} 
        alt={data.name} 
        className="w-full h-40 object-cover rounded-lg mb-2"
      />
      
      <h3 className="text-lg font-bold">{data.name}</h3>
      <p className="text-sm text-gray-400">{data.character}</p>
    </div>
    </Link>
  )
}

export default Card
