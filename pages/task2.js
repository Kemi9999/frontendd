
export default function WeatherDashboard() {
    return (
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-4 text-white mx-auto">
        {/* City and Temperature */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Madrid</h1>
            <p className="text-sm text-gray-400">Chance of rain: 0%</p>
          </div>
          <div className="text-6xl font-bold">
            31°
          </div>
        </div>
  
        {/* Today's Forecast */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Today's Forecast</h2>
          <div className="flex justify-between mt-4 text-center">
            {[
              { time: "6:00 AM", temp: "25°", icon: "🌥️" },
              { time: "9:00 AM", temp: "28°", icon: "⛅" },
              { time: "12:00 PM", temp: "33°", icon: "☀️" },
              { time: "3:00 PM", temp: "34°", icon: "☀️" },
              { time: "9:00 PM", temp: "30°", icon: "🌥️" }
            ].map((hour, index) => (
              <div key={index} className="flex flex-col items-center">
                <p className="text-xs text-gray-400">{hour.time}</p>
                <p>{hour.icon}</p>
                <p className="font-semibold">{hour.temp}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* 7-Day Forecast */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">7-Day Forecast</h2>
          <div className="flex flex-col mt-4 space-y-2">
            {[
              { day: "Today", condition: "Sunny", temp: "36° / 22°", icon: "☀️" },
              { day: "Tue", condition: "Sunny", temp: "37° / 21°", icon: "☀️" },
              { day: "Wed", condition: "Sunny", temp: "37° / 21°", icon: "☀️" },
              { day: "Thu", condition: "Cloudy", temp: "37° / 21°", icon: "☁️" },
              { day: "Fri", condition: "Cloudy", temp: "37° / 21°", icon: "☁️" },
              { day: "Sat", condition: "Rainy", temp: "37° / 21°", icon: "🌧️" },
              { day: "Sun", condition: "Storm", temp: "37° / 21°", icon: "🌩️" },
            ].map((day, index) => (
              <div key={index} className="flex justify-between">
                <p className="text-sm">{day.day}</p>
                <p>{day.icon} {day.condition}</p>
                <p>{day.temp}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Air Conditions */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Air Conditions</h2>
          <div className="flex justify-between text-center mt-4">
            {[
              { label: "Real Feel", value: "30°" },
              { label: "Wind", value: "0.2 km/h" },
              { label: "Chance of rain", value: "0%" },
              { label: "UV Index", value: "3" },
            ].map((condition, index) => (
              <div key={index}>
                <p className="text-gray-400 text-xs">{condition.label}</p>
                <p className="font-semibold">{condition.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }