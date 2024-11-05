import React, { useEffect, useState } from "react";
import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";
import XscrollCard from "../components/XscrollCard";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const trendingData = useSelector((state) => state.moviepixData.bannerData);
  const { data :nowPlayingData } = useFetch("/movie/now_playing")
  const { data :tvTrendingData } = useFetch("/trending/tv/week")
  const { data :onAirData } = useFetch("/tv/on_the_air")

  return (
    <div>
      <BannerHome />
      <XscrollCard data={trendingData} heading={"Trending"} trending={true}/>
      <XscrollCard data={nowPlayingData} heading={"Now Playing in Theaters"} media_type={"movie"}/>
      <XscrollCard data={tvTrendingData} heading={"Trending Shows This Week"} media_type={"tv"}/>
      <XscrollCard data={onAirData} heading={"New This Week"} media_type={"tv"}/>
    </div>
  );
};

export default Home;
