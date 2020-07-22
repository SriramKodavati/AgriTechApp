import React, { useEffect, useReducer } from 'react';

const Weather = () => {

    const INITIAL_STATE = {
        weather: {},
        isAPILoaded: false,
        days:3,
        city:""
    }

    const reducer = (state, action) => {
        const { type, data } = action;
        switch (type) {
            case 'Fetch_Data': {
                return {
                    ...state, ...data,
                    isAPILoaded: true
                }
            }
            case 'Item_Select': {
                return {
                    ...state,days: Number(data)
                }
            }
            case 'City_Select' : {
                return{
                    ...state,city:data
                }
            }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const { weather, isAPILoaded, days, city } = state;
    useEffect(() => {
        fetch(`https://cors-anywhere.herokuapp.com/http://api.weatherapi.com/v1/forecast.json?key=8bd10872b21842f4b17105656202206&q=Rajahmundry&days=3`)
            .then(response => response.json()).then(json => {
                dispatch({ type: 'Fetch_Data', data: { weather: { ...json } } })
            })
    }, [])

    const update = () => {
        fetch(`https://cors-anywhere.herokuapp.com/http://api.weatherapi.com/v1/forecast.json?key=8bd10872b21842f4b17105656202206&q=${city}&days=${days}`)
        .then(response => response.json()).then(json => {
            dispatch({ type: 'Fetch_Data', data: { weather: { ...json } } })
        })
        document.getElementById("location").value = "";
        document.getElementById("days").selectedIndex = 0;
    }

    const { location, current, forecast } = weather;
    return (
        <>
            {
                !isAPILoaded ? (<img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" alt="loading"/>) : (
                    <div className="container">
                        <br />
                        <b>Weather Report: </b>
                        <div>
                        <div className="m-2">Enter the location you want to know weather about and number of Days: </div>
                        <div className="input-group">
                <input type="text" className="form-control" id = "location" onChange={(e) => {e.preventDefault();dispatch({type: 'City_Select', data: e.target.value})}} placeholder="location"></input>
                            <select className="m-2" id = "days"
                                onChange={(e) => {e.preventDefault();dispatch({type: 'Item_Select', data: e.target.value})}} >
                                <option value="Choose">Select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick={update}>Search</button>
                </span>
            </div>
                        </div>
                        <ul>
                            <li><b>Country: </b>{location.country}</li>
                            <li><b>Last Updated: </b>{current.last_updated}</li>
                            <li><b>Name: </b>{location.name}</li>
                            <li><b>Region: </b>{location.region}</li>
                        </ul>
                        <b>Day Wise Weather Report:</b>
                        <div className="row border border-primary mt-3">
                            <div className="col"><b>Date</b></div>
                            <div className="col"><b>Max_Temp & Min_Temp</b></div>
                            <div className="col"><b>Climate</b></div>
                            <div className="col"><b>Chance of Rain</b></div>
                        </div>
                        {forecast.forecastday.map((item, index) =>
                            <div key = {index}>
                                <div className="row mt-4 border">
                                    <div key = {index} className="col">{item.date}</div>
                                    <div key = {index + 1} className="col">{item.day.maxtemp_c} & {item.day.mintemp_c}</div>
                                    <div key = {index + 2} className="col">{item.day.condition.text}</div>
                                    <div key = {index + 3} className="col">{item.day.daily_chance_of_rain}</div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
        </>
    )
}

export default Weather;