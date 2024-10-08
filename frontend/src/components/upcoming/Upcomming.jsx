import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Ucard from "./Ucard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getFilms } from "../../services/filmService";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-chevron-right'></i>
      </button>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-chevron-left'></i>
      </button>
    </div>
  );
};

const Upcomming = ({ title }) => {
  const [films, setFilms] = useState([]); 

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const data = await getFilms(); 
        setFilms(data); 
      } catch (error) {
        console.error("Erreur lors de la récupération des films:", error);
      }
    };

    fetchFilms();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className='upcome'>
      <div className='container'>
        <div className='heading flexSB'>
          <h1>{title}</h1>
          <Link to='/'>View All</Link>
        </div>
        <div className='content'>
          <Slider {...settings}>
            {films.length > 0 ? ( 
              films.map((film) => (
                <Ucard key={film._id} item={film} /> 
              ))
            ) : (
              <p>Aucun film à afficher.</p>
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Upcomming;
