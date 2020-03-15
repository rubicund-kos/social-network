import React from 'react';
import style from './Weather.module.css';

const Weather = (props) => {
    return (
        <div>
            <h1>Погода в твоем городе</h1>
            <select className={style.select}>
                <option value="Kharkov">Kharkov</option>
                <option value="Kiev">Kiev</option>
                <option value="Moscow">Moscow</option>
                <option value="New-York">New-York</option>
                <option value="London">London</option>
            </select>
        </div>
    )
}

export default Weather;