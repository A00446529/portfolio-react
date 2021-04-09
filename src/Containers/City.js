import React from 'react';

export default class City extends React.Component{
    constructor(props){
        super (props)
        this.state = {
            temperature: ''
        }
        this.getTemperature= this.getTemperature.bind(this);
    }
    
    getTemperature= () => {
        const cityname= 'kathmandu';
        const url = "https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=d8c35d230949431c37b2040055ce4e95&units=metric"
        fetch(url).then(response => {
            return response.json();
        }).then(response => {
            //console.log(response.main.temp);
            this.setState({
                temperature: response.main.temp
            })

        }).catch(error => {
            console.log(error);
        })
      }
        
      componentDidMount(){
          this.getTemperature()
      }
    render(){
        return(
            <div style={{textAlign: 'center', fontSize: '17px'}}>
            <p>Weather right now</p>
            <button onClick={this.getTemperature}>Get Temperature</button>
            <p><b>Current Temperature: </b>{this.state.temperature}</p>
            </div>
        )

    };

} 