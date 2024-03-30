import React from "react";
import gymone from "../imgs/gym/1.jpg";
import gymtwo from "../imgs/gym/6.jpg";

export default function Gym() {
  return (
    <div>
     <div class="container">
        <h1 class='text-center text-muted-50 wow animate__animated animate__fadeInUp animate__slow title-category'  id='gym'>Gym</h1>
        <p class='text-center'>Stay active and energized in our fully equipped fitness center, complete with cutting-edge equipment, personal training services, and group fitness classes, ensuring you can achieve your health and wellness goals effortlessly.</p>
        <br></br>
  <div class="row align-items-center">
    <div class="col-md-6 wow animate__animated animate__fadeInLeft animate__slow">
        
      <img src={gymone} class="img-fluid" alt="gym-one"/>
    </div>
    <div class="col-md-6">
      <div class="d-flex justify-content-center p-2 wow animate__animated animate__fadeInRight animate__slow">
        <p class="text-center">Unwind and recharge at our state-of-the-art gym facilities, designed to cater to all fitness levels. Whether you're a beginner or a seasoned athlete, our gym offers a diverse range of equipment and expert trainers to support your fitness journey. Elevate your lifestyle and achieve your wellness goals with our comprehensive gym amenities</p>
      </div>
    </div>
  </div>

  <div class="row align-items-center">
    <div class="col-md-6 order-md-2 wow animate__animated animate__fadeInRight animate__slow">
      <img src={gymtwo} class="img-fluid" alt="gym-two"/>
    </div>
    <div class="col-md-6 order-md-1">
      <div class="d-flex justify-content-center wow animate__animated animate__fadeInLeft animate__slow">
        <p class="text-center">Experience the ultimate workout experience in our modern gym, equipped with cutting-edge fitness equipment and amenities. Our knowledgeable staff is dedicated to helping you reach your fitness goals, offering personalized training programs and nutritional guidance. Join our vibrant fitness community and discover the transformative power of exercise at our gym</p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
