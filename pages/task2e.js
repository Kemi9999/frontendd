import Head from 'next/head';

export default function WeatherDashboard() {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                />
            </Head>
            <div className="h-[100vh] w-[100%] bg-slate-800 flex justify-center items-center">
                <div className="h-[85vh] w-[70%] bg-slate-900 rounded rounded-[2vh] flex">
                    <div className="h-[100%] w-[10%] rounded rounded-[2vh] flex justify-center items-center">
                        <div className="h-[97%] w-[85%] bg-slate-800 rounded rounded-[2vh]">
                            <div className="h-[13%] w-[100%] rounded rounded-[2vh] flex justify-center items-center">
                                <div className="h-[70%] w-[70%] bg-slate-800 rounded rounded-[2vh] flex justify-center items-center text-3xl text-[#8193a1]">
                                    <i className="fa-solid fa-wind"></i>
                                </div>
                            </div>
                            <div className="mt-10 h-[10%] w-[100%] rounded rounded-[2vh]">
                                <div className="h-[30%] w-[100%] rounded rounded-[2vh] justify-center items-center text-3xl flex item-end justify-center text-white">
                                    <i className="fa-solid fa-cloud"></i>
                                </div>
                                <div className="flex justify-center items-start text-white">
                                    <p>Weather</p>
                                </div>
                            </div>
                            <div className="h-[10%] w-[100%] rounded rounded-[2vh]">
                                <div className="h-[30%] w-[100%] rounded rounded-[2vh] justify-center items-center text-3xl flex item-end justify-center text-[#5f696e]">
                                    <i className="fa-solid fa-bars"></i>
                                </div>
                                <div className="flex justify-center items-start text-white">
                                    <p>Cities</p>
                                </div>
                            </div>
                            <div className="h-[10%] w-[100%] rounded rounded-[2vh]">
                                <div className="h-[30%] w-[100%] rounded rounded-[2vh] justify-center items-center text-3xl flex item-end justify-center text-[#5f696e]">
                                    <i className="fa-solid fa-map"></i>
                                </div>
                                <div className="flex justify-center items-start text-white">
                                    <p>Map</p>
                                </div>
                            </div>
                            <div className="h-[10%] w-[100%] rounded rounded-[2vh]">
                                <div className="h-[30%] w-[100%] rounded rounded-[2vh] justify-center items-center text-3xl flex item-end justify-center text-[#5f696e]">
                                    <i className="fa-solid fa-sliders"></i>
                                </div>
                                <div className="flex justify-center items-start text-white">
                                    <p>Settings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[100%] w-[60%] rounded rounded-[2vh] flex flex-col">
                        {/* Search bar and current weather */}
                        <div className="h-[10%] w-[100%] flex justify-center items-center">
                            <input
                                type="text"
                                id="first_name"
                                className="bg-[#484d57] text-[#484d57] text-sm rounded-lg block w-[95%] p-2.5"
                                placeholder="Search for cities"
                                required
                            />
                        </div>
                        <div className="h-[25vh] w-[100%] flex">
                            <div className="h-[100%] w-[50%]">
                                <div className="h-[50%] w-[100%]">
                                    <h1 className="text-bold text-white text-3xl pl-4 pt-5">Madrid</h1>
                                    <h3 className="text-bold text-slate-600 pl-6">Chance of rain 0%</h3>
                                </div>
                                <div className="h-[50%] w-[100%]">
                                    <h1 className="text-[6vh] text-bold text-white pl-6">31º</h1>
                                </div>
                            </div>
                            <div className="h-[100%] w-[50%] text-[21vh] text-yellow-500 flex justify-center items-center">
                                <i className="fa-solid fa-sun"></i>
                            </div>
                        </div>
                        <div className="h-[24vh] w-[100%] rounded rounded-[2vh] flex justify-center items-center">
                            <div className="h-[90%] w-[95%] bg-slate-800 rounded rounded-[2vh] flex items-center flex-col">
                                <div className="h-[15%] w-[100%] flex items-center rounded rounded-">
                                    <h1 className="ml-4 mt-1 text-[#adb5bc] text-bold text-md">Today's Forecast</h1>
                                </div>
                                <div className="h-[85%] w-[100%] rounded rounded-[2vh] flex justify-around">
                                    <div className="h-[100%] w-[16.6%] rounded rounded-[2vh]">
                                        <div className="h-[20%] w-[100%] flex justify-center items-center text-slate-100 text-bold text-xl">
                                            6:00 AM
                                        </div>
                                        <div className="h-[30%] w-[100%] flex justify-center items-center text-white text-6xl">
                                            <i className="fa-solid fa-cloud"></i>
                                        </div>
                                        <div className="h-[20%] w-[100%] pl-4 text-[5vh] text-bold text-white flex justify-center items-center">
                                            <h1>25º</h1>
                                        </div>
                                    </div>
                                    <div className="h-[100%] w-[15%] rounded rounded-[2vh]">
                                        <div className="h-[20%] w-[100%] flex justify-center items-center text-slate-100 text-bold text-xl"></div>
                                        <div className="h-[30%] w-[100%] flex justify-center items-center text-white text-6xl">
                                            <i className="fa-solid fa-cloud-sun"></i>
                                        </div>
                                        <div className="h-[20%] w-[100%] pl-4 text-[5vh] text-bold text-white flex justify-center items-center">
                                            <h1>28º</h1>
                                        </div>
                                    </div>
                                    <div className="h-[100%] w-[15%] rounded rounded-[2vh]">
                                        <div className="h-[20%] w-[100%] flex justify-center items-center text-slate-100 text-bold text-xl">
                                            12:00 AM
                                        </div>
                                        <div className="h-[30%] w-[100%] flex justify-center items-center text-white text-6xl pl-7">
                                            <i className="fa-solid fa-cloud-moon-rain"></i>
                                        </div>
                                        <div className="h-[20%] w-[100%] pl-4 text-[5vh] text-bold text-white flex justify-center items-center">
                                            <h1>33º</h1>
                                        </div>
                                    </div>
                                    <div className="h-[100%] w-[15%] rounded rounded-[2vh]">
                                        <div className="h-[20%] w-[100%] flex justify-center items-center text-slate-100 text-bold text-xl">
                                            3:00 PM
                                        </div>
                                        <div className="h-[30%] w-[100%] flex justify-center items-center text-white text-6xl pl-3">
                                            <i className="fa-solid fa-cloud-bolt"></i>
                                        </div>
                                        <div className="h-[20%] w-[100%] pl-4 text-[5vh] text-bold text-white flex justify-center items-center">
                                            <h1>34º</h1>
                                        </div>
                                    </div>
                                    <div className="h-[100%] w-[15%] rounded rounded-[2vh]">
                                        <div className="h-[20%] w-[100%] flex justify-center items-center text-slate-100 text-bold text-xl">
                                            6:00 PM
                                        </div>
                                        <div className="h-[30%] w-[100%] flex justify-center items-center text-white text-6xl pl-3">
                                            <i className="fa-solid fa-cloud"></i>
                                        </div>
                                        <div className="h-[20%] w-[100%] pl-4 text-[5vh] text-bold text-white flex justify-center items-center">
                                            <h1>30º</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}