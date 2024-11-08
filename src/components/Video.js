import React from 'react';
import { IoClose } from 'react-icons/io5';
import useFetchDetails from '../hooks/useFetchDetails';

const Video = ({ data, close, media_type }) => {
  const { data: videoData } = useFetchDetails(`/${media_type}/${data?.id}/videos`);

  const trailerKey = videoData?.results?.find(video => video.type === 'Trailer' && video.site === 'YouTube')?.key;

  return (
    <section className='fixed bg-blue-950 top-0 right-0 bottom-0 left-0 z-40 bg-opacity-50 flex justify-center items-center'>
      <div className='bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded relative'>
        <button onClick={close} className='text-white absolute -right-3 -top-3 text-3xl z-50'>
          <IoClose />
        </button>

        {trailerKey ? (
          <iframe
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="Trailer"
            className="w-full h-full rounded"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <p className="text-white text-center p-5">Trailer not available</p>
        )}
      </div>
    </section>
  );
};

export default Video;
