import React from 'react'
import Header from "./components/Header";
import Splash from './components/Splash';
import BlogCard from './components/BlogCard';
import FilterBar from './components/FilterBar';
import Footer from './components/Footer';

import image1 from './images/tempThumbs/1.jpg';
import image2 from './images/tempThumbs/2.jpg';
import image3 from './images/tempThumbs/3.jpg';
import image4 from './images/tempThumbs/4.jpg';

function App() {

  // Retrieve blog data
  const blogData = [
    {
      id: 1,
      image: image1,
      title: 'Netus et malesuada fames ac turpis egestas sed tempus.',
      date: 'April 4th, 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A iaculis at erat pellentesque.',
    },
    {
      id: 2,
      image: image2,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'March 24th, 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A iaculis at erat pellentesque.',
    },
    {
      id: 3,
      image: image3,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'March 24th, 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A iaculis at erat pellentesque.',
    },
    {
      id: 4,
      image: image4,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'March 24th, 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A iaculis at erat pellentesque.',
    },
    {
      id: 5,
      image: image1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'March 24th, 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A iaculis at erat pellentesque.',
    },
    {
      id: 6,
      image: image2,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: 'March 24th, 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A iaculis at erat pellentesque.',
    },
  ];


  return (
    <div className="container">
      <Header></Header>
      <Splash></Splash>
      <FilterBar></FilterBar>
      <div className='cardContainer'>
        {blogData.map((blog) => (
          <BlogCard image={blog.image} key={blog.id} title={blog.title} date={blog.date} description={blog.description}></BlogCard>
        ))}
      </div>
      <div className='footerContainer'>
        <Footer></Footer>
        <p style={{ alignContent: 'center', textAlign: 'center', color: 'grey', fontWeight: 'lighter', padding: '10px' }}>@ 2023 - JulianElnasser - All Rights Reserved</p>
      </div>
    </div>
  );
}

export default App;
