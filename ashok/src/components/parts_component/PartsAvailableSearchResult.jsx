import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PartsAvailable from './PartsAvailable';

export default class PartsAvailableSearchResult extends React.Component {
  render() {
    return (
    
      <div className="container">
        <div className="container">
        <div class="row">
          <div class="col-lg-4"> 
          RDR Vehicle Registration Summary
          </div>
          <div class="col-lg-4"> 
             <ul>
               <li><a>Refresh</a></li>
               <li><a> View</a></li>
               <li><a>Exit Screen </a></li>
               </ul>
          </div>
          </div>
      <table>
        <thead>
          <tr>
            <th>VIN</th>
            <th>Deal#</th>
            <th>Stock#</th>
            <th>Name</th>
            <th>TCI Model Code</th>
            <th>Sales Type</th>
            <th>Delivery/
Registration Date</th>
            <th>Target 
Delivery Date</th>
            <th>Status</th>
            <th>NVIS Print Date</th>
            <th>ERA2 
Transmission Date</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5tfcz5anxhx057724</td>
              <td>233442A</td>
              <td> 17114</td>
              <td>KBN Merchnadises Inc.</td>
              <td>&nbsp;</td>
              <td>A - Retail Sale</td>
              <td>2016-11-29</td>
              <td>2016-11-08</td>
              <td>Error(s) 
Detected</td>
<td>2016-11-03</td>
<td>2016-11-03</td>
              </tr>
            </tbody>
        </table>
        <div class="row">
          <div class="col-lg-12"> 
            <ul> <li> Click on a Column Heading to sort in ascending order</li>
              <li>Click on a Column Heading a second time to sort in descending order</li>
            </ul>
          </div>
        </div>
      </div>
        <h3>Parts Availibility</h3><br />
        <div className="bg-white parts-ava">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-10">  <PartsAvailable /> </div>
            <div className="col-lg-1 col-md-1 col-sm-1"> <Link to="/partsAvailableSearch" className="btn btn-primary">Back to search</Link> </div>

          </div>
         
         
            
          
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Parts Availability</th>
                <th>Dealer Code-Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Part Description</td>
                <td>xxxxxxxxxxxxxxxxxxxxx</td>
              </tr>
              <tr>
                <td>Sell Package Quantity</td>
                <td>999999</td>
              </tr>
              <tr>
                <td>Dealer Net Price</td>
                <td>$ 999,999.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}