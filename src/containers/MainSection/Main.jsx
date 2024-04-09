import React from 'react'
import "./main.css"
import { MdOutlineWbSunny } from "react-icons/md";
import { FaTemperatureEmpty } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { FaCloudSunRain } from "react-icons/fa";

import { TbUvIndex } from "react-icons/tb";


const Main = () => {
    return (
        <>
            <div className="main_section">
                <div className="input">
                    <input type="text" placeholder='Search for city' className='input' />
                </div>
                <div className="display_section">
                    <div className="city_stats">
                        <div className="city_names">

                            <h1>Mumbai</h1>
                            <p>Chance of rain : 0%</p>
                        </div>
                        <div className="degree">

                            <h1 id='degree'>31*</h1>
                        </div>
                    </div>
                    <div className="image">
                        <img src="https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png" alt="" />
                    </div>
                </div>
                <div className="today_forecast">
                    <p className='small_style'>TODAYS FORECAST</p>

                    <div className="forecast">



                        <div className="forecase_detail">
                            <p>6.00 AM</p>
                            <img src="https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png" alt="" />
                            <p id='card_degree'>25%</p>
                        </div>
                        <div class="vertical-line"></div>
                        <div className="forecase_detail">
                            <p>6.00 AM</p>
                            <img src="https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png" alt="" />
                            <p id='card_degree'>25%</p>
                        </div>
                        <div class="vertical-line"></div>
                        <div className="forecase_detail">
                            <p>6.00 AM</p>
                            <img src="https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png" alt="" />
                            <p id='card_degree'>25%</p>
                        </div>
                        <div class="vertical-line"></div>
                        <div className="forecase_detail">
                            <p>6.00 AM</p>
                            <img src="https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png" alt="" />
                            <p id='card_degree'>25%</p>
                        </div>
                        <div class="vertical-line"></div>
                        <div className="forecase_detail">
                            <p>6.00 AM</p>
                            <img src="https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png" alt="" />
                            <p id='card_degree'>25%</p>
                        </div>
                        <div class="vertical-line"></div>
                        <div className="forecase_detail">
                            <p>6.00 AM</p>
                            <img src="https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png" alt="" />
                            <p id='card_degree'>25%</p>
                        </div>
                        <div class="vertical-line"></div>
                    </div>



                </div>
                <div className="air_condition">


                    <div className="left_items">


                        <div className="data">
                            <p style={{ fontSize: "30px" }}><FaTemperatureEmpty /></p>
                            <div className="stats">
                                <p>Real Feel</p>
                                <p id='degree_stats'>30%</p>

                            </div>

                        </div>
                        <div className="data">
                            <p style={{ fontSize: "30px" }}><FaCloudSunRain />


                            </p>
                            <div className="stats">
                                <p>Chance of Rain</p>
                                <p id='degree_stats'>30%</p>

                            </div>

                        </div>

                    </div>
                    <div className="right_items">
                        <div className="data">
                            <p style={{ fontSize: "30px" }}><FaWind />

                            </p>
                            <div className="stats">
                                <p>Wind</p>
                                <p id='degree_stats'>30%</p>

                            </div>

                        </div>
                        <div className="data">
                            <p style={{ fontSize: "30px" }}><TbUvIndex />

                            </p>
                            <div className="stats">
                                <p>UV Index</p>
                                <p id='degree_stats'>30%</p>

                            </div>

                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Main;
