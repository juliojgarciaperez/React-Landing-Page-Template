import React, { Component } from "react";

export class Contact extends Component {
  state = {
    name: '',
    email: '',
    msg: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const mailTo = window.encodeURI(`mailto:info@welvanauic.com?subject=Contacto ${this.state.name}&body=${this.state.msg}`)
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Contacta con nosotros</h2>
                </div>
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          value={this.state.name}
                          onChange={this.handleChange}
                          className="form-control"
                          placeholder="Nombre"
                          required="required"
                          name="name"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      value={this.state.msg}
                      onChange={this.handleChange}
                      name="msg"
                      id="message"
                      className="form-control"
                      rows="10"
                      placeholder="Mensaje"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <a href={mailTo} className="btn btn-custom btn-lg">Enviar</a>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Información de Contacto</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Dirección
                  </span>
                  Paseo Independencia 34.<br/>entreplanta 2.<br/>21002.<br/>Huelva
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  +34 689 436 327
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  info@welvanautic.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
