import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import PartsAvailable from './PartsAvailable';

export default class PartsAvailableSearchFormView extends React.Component {

  render() {
    return (
      <div className="container"><br />
        <h3>Parts Availibility</h3><br />
        <div className="bg-white parts-ava">
          <PartsAvailable />

          <div className="col-6 col-md-6 col-sm-12 ml12 mt10">
            <form>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Dealer</label>
                <div className="col-sm-8">
                  <input type="text" className="form-control" id="dealer" defaultValue="XXXXXXXXXX" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Part Number</label>
                <div className="col-sm-8">
                  <input type="text" className="form-control" id="partNumber" defaultValue="XXXXXXXXXX" />
                </div>
              </div>
            </form>
            <br />
          </div>
        </div>

        <div className="mt10">
          <button className="btn btn-primary float-right">Search</button>
        </div>
      </div>
    );
  }
}