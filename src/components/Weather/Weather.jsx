import React from 'react';

const Weather = (props) => {
    return (
        <div>
            <h1>Погода в твоем городе</h1>
            <div>
                <label htmlFor="Country">Страна: </label>
                <select name="" id="Country">
                    <option value="UA">Ukraine</option>
                    <option value="RU">Russia</option>
                    <option value="BE">Belarus</option>
                </select>
            </div>
            <div>
                <label htmlFor="city">Город: </label>
                <div id="cities">

                </div>
            </div>

        </div>
    )
}

export default Weather;