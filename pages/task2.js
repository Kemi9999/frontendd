// components/Weather.js
import React from "react";

const Weather = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg w-96 mx-auto">
      {/* City and Temperature */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Madrid</h1>
          <p className="text-sm text-gray-400">Chance of rain: 0%</p>
        </div>
        <div className="text-6xl font-bold">31°</div>
      </div>

      {/* Today's Forecast */}
      <div className="mt-6">
        <p className="text-lg font-semibold">Today's Forecast</p>
        <div className="flex justify-between mt-4 text-center">
          <div>
            <p className="text-sm text-gray-400">6:00 AM</p>
            <p className="text-2xl">25°</p>
            <p className="text-sm text-gray-400">Cloudy</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">9:00 AM</p>
            <p className="text-2xl">28°</p>
            <p className="text-sm text-gray-400">Cloudy</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">12:00 PM</p>
            <p className="text-2xl">33°</p>
            <p className="text-sm text-yellow-500">Sunny</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">3:00 PM</p>
            <p className="text-2xl">34°</p>
            <p className="text-sm text-yellow-500">Sunny</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">9:00 PM</p>
            <p className="text-2xl">30°</p>
            <p className="text-sm text-gray-400">Cloudy</p>
          </div>
        </div>
      </div>

      {/* Air Conditions */}
      <div className="mt-6">
        <p className="text-lg font-semibold">Air Conditions</p>
        <div className="flex justify-between mt-4">
          <div>
            <p className="text-sm text-gray-400">Real Feel</p>
            <p className="text-lg">30°</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Wind</p>
            <p className="text-lg">0.2 km/h</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Chance of rain</p>
            <p className="text-lg">0%</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">UV Index</p>
            <p className="text-lg">3</p>
          </div>
        </div>
      </div>

      {/* 7-Day Forecast */}
      <div className="mt-6">
        <p className="text-lg font-semibold">7-Day Forecast</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex justify-between items-center">
            <span>Mon</span>
            <span>Sunny</span>
            <span>36°/22°</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Tue</span>
            <span>Sunny</span>
            <span>37°/21°</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Wed</span>
            <span>Sunny</span>
            <span>37°/21°</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Thu</span>
            <span>Cloudy</span>
            <span>37°/21°</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Fri</span>
            <span>Cloudy</span>
            <span>37°/21°</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Sat</span>
            <span>Rainy</span>
            <span>37°/21°</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Sun</span>
            <span>Storm</span>
            <span>37°/21°</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;