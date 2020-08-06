import React, { Component } from 'react';

import './App.css';
import Chart from './Chart';

class App2 extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
   // this.getchartData(); // this should be this.getChartData();
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Berlin', 'Munich', 'Hamburg', 'Colone', 'Hanover', 'Gutersloh','Dusseldorf','Achen','Heinsberg'],
        datasets:[
          {
            label:'Cases',
            data:[
              9071,
              7242,
              5338,
              2921,
              2890,
              2621,
              2324,
              2082,
              2075,
              1978
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(230, 99, 132, 0.6)',
              'rgba(150, 99, 132, 0.6)',
            ]
          }
        ]
      },
      options:{
        responsive:true,
            maintainAspectRatio:false
      }
    });
  }

  render() {
    return (
      <div className="App" >
       
        <Chart chartData={this.state.chartData} location="" legendPosition="bottom"/>
      </div>
    );
  }
}

export default App2;
