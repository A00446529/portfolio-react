import React from 'react';

export default class City extends React.Component{
    // state= {
    //     city : 'Kathmandu'
    // }

    getTemperature= () => {
        const cityname= 'kathmandu';
        const url = "https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=d8c35d230949431c37b2040055ce4e95"
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            console.log(data.main.temp);
        }).catch(error => {
            console.log(error);
        })
      }
        
    render(){
        let data= null;
        data= <p>temperature is :{this.state.temperature}</p>
        return(
            <div style={{textAlign: 'center', fontSize: '17px'}}>
            <p>Weather right now</p>
            <button onClick={this.getTemperature}>Get Temperature</button>

            </div>
        )
    };
} 