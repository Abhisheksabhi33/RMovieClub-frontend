import React from "react";
import Container from "./Container";
import HeroSlideshow from "./user/HeroSlideshow";
import NotVerified from "./user/NotVerified";
import TopRatedMovies from "./user/TopRatedMovies";
import TopRatedTVSeries from "./user/TopRatedTVSeries";
import TopRatedWebSeries from "./user/TopRatedWebSeries";
import TopRatedSongs from "./user/TopRatedSongs";
import Footer from "./user/Footer";


export default function Home() {
  return (
    <div className="dark:bg-primary bg-white min-h-screen">
      <Container className="px-2 xl:p-0">
        <NotVerified />
        {/* slider */}
        <HeroSlideshow />
        {/* Most rated movies */}
        <div className="space-y-3 py-8">
          <TopRatedSongs/>
          <TopRatedMovies />
          <TopRatedWebSeries />
          <TopRatedTVSeries />
          <Footer className="text-center text-gray-500 text-sm py-4"/>
        </div>
      </Container>
    </div>
  );
}
