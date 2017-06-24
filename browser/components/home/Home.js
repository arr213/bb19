import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {

  render() {
    let styles = {
      'background': 'lightblue'
    };
    let tableStyles = {
      // border: '1px solid black',
      // width: 'auto'
    };

    let rows = [
      [1, 'Alex', 5],
      [2, 'Alex', 5],
      [3, 'Alex', 5],
      [4, 'Alex', 5],
      [5, 'Alex', 5],
      [6, 'Alex', 5],
      [7, 'Alex', 5],
    ];

    let tableInfo = rows.map((row, idx) => {
      return (
        <tr key={idx}>
          <td>{row[0]}</td>
          <td>{row[1]}</td>
          <td>{row[2]}</td>
        </tr>
      )
    });
    return (
      <div id="scoreboard">
        <header className="text-right" style={styles}>
          <div className="row" style={{background: 'black', height: '300px'}}>
            <img style={{height: '300px'}} src="public/bb19-header.jpg"/>
          </div>
        </header>
        <div className="row" style={{'backgroundColor': 'black'}}>
          <div className="col-md-6 col-md-offset-3" style={{'boxShadow': '5px 5px 2px #111', padding: '10px', 'backgroundColor': 'lightblue', 'marginTop': '50px', marginBottom: '50px'}}>
            <table className="table table-hover  text-center">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Player</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {tableInfo}
              </tbody>
            </table>
          </div> 
        </div>
      </div>
    );
  }
}
