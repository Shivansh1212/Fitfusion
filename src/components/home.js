import React from "react";
import bg_img from "../images/bg_img.jpg";

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-4 md:w-1/3">
    <div className="bg-white dark:bg-gray-800 border-2 border-gray-300 p-6 rounded-lg shadow-md">
      <div className="flex-shrink-0 mx-auto mb-6">{icon}</div>
      <h2 className="text-xl font-semibold title-font mb-2 text-gray-800 dark:text-white">
        {title}
      </h2>
      <p className="leading-relaxed text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  </div>
);

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <img src={bg_img} alt="background home" className="w-full h-fit brightness-75 blur-sm"/>
      <div className="relative container mx-auto p-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">FitFusion</h1>
          <p className="text-gray-400">
            Achieve your fitness goals with our personalized training programs.
          </p>
        </header>
        <div className="flex flex-wrap -m-4">
          <FeatureCard
            icon={<i className="fas fa-dumbbell text-4xl text-blue-500" />}
            title="Personalized Workouts"
            description="Get custom workout plans tailored to your fitness level and goals."
          />
          <FeatureCard
            icon={<i className="fas fa-heartbeat text-4xl text-red-500" />}
            title="Health Tracking"
            description="Monitor your progress and track key health metrics effortlessly."
          />
          <FeatureCard
            icon={<i className="fas fa-chart-line text-4xl text-green-500" />}
            title="Performance Analytics"
            description="Visualize your performance with insightful analytics and charts."
          />
        </div>
        <section className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Ready to start your fitness journey? Click the button below.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Get Started
          </button>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
