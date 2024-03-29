import React, { Component } from "react";
class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card-body">
        <div className="row">
          <div className="col-md-3 col-xs-6 b-r">
            {" "}
            <strong>Full Name</strong>
            <br />
            <p className="text-muted">Johnathan Deo</p>
          </div>
          <div className="col-md-3 col-xs-6 b-r">
            {" "}
            <strong>Mobile</strong>
            <br />
            <p className="text-muted">(123) 456 7890</p>
          </div>
          <div className="col-md-3 col-xs-6 b-r">
            {" "}
            <strong>Email</strong>
            <br />
            <p className="text-muted">johnathan@admin.com</p>
          </div>
          <div className="col-md-3 col-xs-6">
            {" "}
            <strong>Location</strong>
            <br />
            <p className="text-muted">London</p>
          </div>
        </div>
        <hr />
        <p className="m-t-30">
          Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
          enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
          dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus.
          Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries{" "}
        </p>
        <p>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <h4 className="font-medium m-t-30">Skill Set</h4>
        <hr />
        <h5 className="m-t-30">
          Wordpress <span className="pull-right">80%</span>
        </h5>
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            aria-valuenow={80}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: "80%", height: "6px" }}
          >
            {" "}
            <span className="sr-only">50% Complete</span>{" "}
          </div>
        </div>
        <h5 className="m-t-30">
          HTML 5 <span className="pull-right">90%</span>
        </h5>
        <div className="progress">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            aria-valuenow={90}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: "90%", height: "6px" }}
          >
            {" "}
            <span className="sr-only">50% Complete</span>{" "}
          </div>
        </div>
        <h5 className="m-t-30">
          jQuery <span className="pull-right">50%</span>
        </h5>
        <div className="progress">
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            aria-valuenow={50}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: "50%", height: "6px" }}
          >
            {" "}
            <span className="sr-only">50% Complete</span>{" "}
          </div>
        </div>
        <h5 className="m-t-30">
          Photoshop <span className="pull-right">70%</span>
        </h5>
        <div className="progress">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            aria-valuenow={70}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: "70%", height: "6px" }}
          >
            {" "}
            <span className="sr-only">50% Complete</span>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
