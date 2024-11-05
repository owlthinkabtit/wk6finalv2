import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

const ExplorePage = () => {
  const params = useParams()
  const [pageNum, setPageNum] = useState(1)
  const [data, setData] = useState([])
  const [totalPgNum, setTotalPgNum] = useState(0)

  console.log("params", params.explore)

  const fetchData = async () =>{
    try{
      const response = await axios.get(`/discover/${params.explore}`, {
        params : {
          page: pageNum
        }
      })
      setData((preve)=>{
        return[
          ...preve,
          ...response.data.results 
        ]
      })
      setTotalPgNum(response.data.total_pages)
    }
    catch (error) {
      console.log('error', error)

    }
  }

  const handleScroll = () => {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setPageNum(preve => preve + 1)
    }
  }

  useEffect(() =>{
    fetchData()
  },[pageNum])

  useEffect(() => {
    setPageNum(1)
    setData([])
    fetchData()
  }, [params.explore])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll )
  },[])

  return (
    <div className='py-16'>
      <div className='container mx-auto'>
        <h3 className='capitalize text-white text-lg lg:text-1xl font-semibold my-3'>What's Popular in {params.explore} Shows</h3>
        <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
          {
            data.map((exploreData, index) => {
              return(
                <Card data={exploreData} key={exploreData.id+"exploreSection"} media_type={params.explore} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ExplorePage;
