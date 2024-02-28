import Slider from "react-slick";
import Title from "./Title";
import ReferenceItem from "./ReferenceItem";
import canaryGardenImage from "../banner.jpg";
const References = () => {
  const title = {
    text: "Our Latest",
    description: "Events",
  };
  const latestevent = [
    {
      image: canaryGardenImage,
      title:"DAMAC PROPERTIES",
      desciption:"Know More"
    },
    {
      image: canaryGardenImage,
      title:"DAMAC INTERNATIONAL",
      desciption:"Know More"
    },
    {
      image: canaryGardenImage,
    },
    {
      image: canaryGardenImage,
      desciption:""

    },
    {
      image: canaryGardenImage,
      desciption:""

    },
    {
      image: canaryGardenImage,
      desciption:""
    },
  ];
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoPlay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <section className="section-references">
      <div className="container">
        <Title title={title.text} description={title.description} />
        <div className="row">
          <div className="col-lg-12">
            <Slider {...settings}>

              {latestevent.map((xe , index) => ( 
                <ReferenceItem key={index} images={xe.image} />
              )  )}
        
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
