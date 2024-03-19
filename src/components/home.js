import React from "react";
import bg_img from "../images/bg_img.jpg";
import { FaAngleDown } from "react-icons/fa";
import { IoIosBody } from "react-icons/io";
import { GrYoga } from "react-icons/gr";
import { PiBowlFoodFill } from "react-icons/pi";
import { TbDeviceAnalytics } from "react-icons/tb";

const HomePage = () => {
  return (
    <div>
      <div className="relative bg-gray-900 text-white">
        <img
          src={bg_img}
          alt="background home"
          className="absolute w-full h-full object-cover brightness-50 blur-sm"
        />
        <div className=" relative z-10 md:p-40 ml-16 md:ml-0 pt-32 mr-16 pb-10">
          <p className="text-3xl md:text-4xl py-1 font-home">SWEAT, ACHIEVE</p>
          <p className="text-3xl md:text-4xl  py-1 font-home">
            REPEAT, SUCCEED!
          </p>
          <p className=" text-gray-200 py-4 text-justify font font-home">
            Welcome to FitFusion, your premier destination for yoga and fitness
            enthusiasts. Here, we strive to cultivate a sanctuary where the
            harmony of mind, body, and spirit intertwines seamlessly. Get ready
            to unleash your potential and awaken your senses. Welcome to
            FitFusion, where wellness meets wonder, and every step brings you
            closer to your best self.
          </p>
          <p className=" text-gray-200 py-4 text-justify font-home">
            Whether you're a seasoned yogi, a fitness enthusiast, or someone
            just beginning their journey to a healthier lifestyle, FitFusion has
            something for everyone. From energizing yoga flows to heart-pumping
            HIIT workouts, soothing meditation sessions to nutritional guidance,
            our platform is your one-stop-shop for holistic wellness.
          </p>
          <div className="mt-6 flex items-center md:text-base text-sm">
            <button className="bg-gray-800 border border-gray-400 rounded-md px-3 py-2 font-semibold ">
              Get started
            </button>
            <div className="mx-10 cursor-pointer font-semibold flex items-center">
              Our services
              <div className="pt-1 pl-1">
                <FaAngleDown />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" bg-gray-900">
        <div class="text-3xl font-home font-semibold text-white flex items-center justify-center pt-10">
          Our services
        </div>
        <div class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mt-8 mx-6 pb-6">
          <div class="text-gray-200 bg-gray-950 rounded-lg p-4 border-4 border-gray-400">
            <h3 class="text-lg font-semibold items-center justify-center flex">
              Workouts
            </h3>
            <div className="flex items-center justify-center py-2">
              <IoIosBody size={60} />
            </div>
            <p className="text-sm text-justify">
              We provide you with the best suited workouts possible for each
              day, giving you different variety of exercises so that you are
              never bored of taking care of yourself anytime soon!
            </p>
          </div>
          {/* Diet Card */}
          <div class="text-gray-200 bg-gray-950 rounded-lg p-4 border-4 border-gray-400">
            <h3 class="text-lg font-semibold items-center justify-center flex">Diet</h3>
            <div className="flex items-center justify-center py-2">
              <PiBowlFoodFill size={60} />
            </div>
            <p className="text-sm text-justify">
              Personalized diet plans tailored to your goals and needs. Whether
              you're looking to lose weight, gain muscle, or improve your
              overall health, our nutritionists will create a customized plan
              just for you.
            </p>
          </div>
          {/* Yoga Card */}
          <div class="text-gray-200 bg-gray-950 rounded-lg p-4 border-4 border-gray-400">
            <h3 class="text-lg font-semibold items-center justify-center flex">Yoga</h3>
            <div className="flex items-center justify-center py-2">
              <GrYoga size={60} />
            </div>
            <p className="text-sm text-justify">
              Experience the rejuvenating benefits of yoga with our expert
              instructors. From Vinyasa flow to Ashtanga, we offer a variety of
              classes suitable for all levels. Strengthen your body, calm your
              mind, and find balance in your life with our yoga sessions.
            </p>
          </div>
          {/* Analytics Card */}
          <div class="text-gray-200 bg-gray-950 rounded-lg p-4 border-4 border-gray-400">
            <h3 class="text-lg font-semibold items-center justify-center flex">Analytics</h3>
            <div className="flex items-center justify-center py-2">
              <TbDeviceAnalytics size={60} />
            </div>
            <p className="text-sm text-justify">
              Track your progress and optimize your fitness journey with our
              advanced analytics tools. Gain insights into your workouts, diet,
              sleep patterns, and more to make informed decisions and achieve
              your health and fitness goals faster.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
