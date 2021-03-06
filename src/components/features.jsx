import React, { Component } from "react";

export class features extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="row logos">
            <div className="col-12 col-md-6">
              <img src="/img/logo.jpeg" alt="logo"/>
            </div>
            <div className="col-12 col-md-6">
              <img src="/img/logo1.jpeg" alt="logo"/>
            </div>
          </div>
          
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Servicios</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                    {" "}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    );
  }
}

export default features;
