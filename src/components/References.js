import Slider from "react-slick";
import ReferenceItem from "./ReferenceItem";
import eventoneone from "../imgs/one.jpg";
import eventtwo from "../imgs/two.png";
import eventtree from "../imgs/tree.jpg";
import eventfoor from "../imgs/foor.jpg";
import eventfive from "../imgs/five.jpg";

const References = () => {

  const latestevent = [
    {
      image: eventoneone,
      desciption: "",
    },
    {
      image: eventtwo,
      title: "DAMAC PROPERTIES",
      desciption: "Know More",
    },
    {
      image: eventtree,
      title: "DAMAC INTERNATIONAL",
      desciption: "Know More",
    },
    {
      image: eventfive,
    },
    {
      image: eventfoor,
      desciption: "",
    },
    {
      image: eventfoor,
      desciption: "",
    },
    {
      image: eventfoor,
      desciption: "",
    },
    {
      image: eventfoor,
      desciption: "",
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
        <h1 className='text-center title-category' id='apartment'>Apartments</h1>
        <p className='text-center'>Discover your ideal living space in our thoughtfully designed apartments, featuring modern finishes, spacious layouts, and breathtaking views, providing the perfect backdrop for your urban lifestyle.</p>
        <br></br>
        <div className="row">
          <div className="col-lg-12">
            <Slider {...settings}>
              {latestevent.map((xe, index) => (
                <ReferenceItem key={index} images={xe.image} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
