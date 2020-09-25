import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
import { placeData } from '../../FakeData/PlaceData';
import ChoiceContainer from '../ChoiceContainer/ChoiceContainer';
import SliderItem from '../SliderItem/SliderItem';
import './IntroSlider.css';

const IntroSlider = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    
    let slider1 = [], slider2 = [];

    useEffect(() => {
       setNav1(slider1);
       setNav2(slider2);
    },[slider1, slider2]);

    const settings = {
        focusOnSelect: true,
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
      };

    const settings2 ={
        arrows: false
    }

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        setPlaces([...placeData]);
    },[])

    return (
        <div className="bg-transparent pt-5 d-flex align-items-center justify-content-around">
            <Helmet>
                <style>{'body { background-image: url("/Images/Image/Rectangle 1.png"); background-size : cover; background-position : center; background-blend-mode: darken; }'}</style>
            </Helmet>
            <div className="w-50 pl-5 text-white">
                <Slider {...settings2} className="pl-5" asNavFor={nav2} ref={slider => (slider1 = slider)}>
                    {
                        places.map((plc, idx) => <ChoiceContainer data={plc} key={idx}></ChoiceContainer> )
                    }
                </Slider>
            </div>
            <div className="w-50">
                <Slider asNavFor={nav1} ref={slider => (slider2 = slider)} {...settings}>
                    {
                        places.map((plc , idx) => <SliderItem data={plc} key={idx}></SliderItem>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default IntroSlider;