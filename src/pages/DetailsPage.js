import React from 'react'
import { useParams } from 'react-router-dom';
import useFetchDetails from '../hooks/useFetchDetails';
import axios from 'axios';

const DetailsPage = () => {
  const params =useParams()
  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`)
  const { data : castData} = useFetchDetails(`/${params?.explore}/${params?.id}/credits`)

  console.log("data", data)
  console.log("star cast", castData)

  return (
    <div>
      details
    </div>
  )
}

export default DetailsPage;
