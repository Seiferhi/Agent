import React, { Component } from 'react';
import Parametre from './parametre';
import Info from './infoPersonnel';
import Acceuil from './acceuil';
class Profil extends Component {
 
  render() { 
    return ( 
       
        <div className="page-wrapper">
           
            <div className="container-fluid">
            {/* Bread crumb and right sidebar toggle */}
            <div className="row page-titles">
              <div className="col-md-5 align-self-center">
                <h3 className="text-themecolor">Profile</h3>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                  <li className="breadcrumb-item active">Profile</li>
                </ol>
              </div>
              <div className="col-md-7 align-self-center text-right d-none d-md-block">
                <button type="button" className="btn btn-info"><i className="fa fa-plus-circle" /> Create New</button>
              </div>
              <div className>
                <button className="right-side-toggle waves-effect waves-light btn-inverse btn btn-circle btn-sm pull-right m-l-10"><i className="ti-settings text-white" /></button>
              </div>
            </div>
           
            {/* End Bread crumb and right sidebar toggle */}
            
            {/* Start Page Content */}
            {/* Row */}
            <div className="row">
              {/* Column */}
              <div className="col-lg-4 col-xlg-3 col-md-5">
                <div className="card">
                  <div className="card-body">
                    <center className="m-t-30"> <img src="../assets/images/users/5.jpg" className="img-circle" width={150} />
                      <h4 className="card-title m-t-10">Hanna Gover</h4>
                      <h6 className="card-subtitle">Accoubts Manager Amix corp</h6>
                      <div className="row text-center justify-content-md-center">
                        <div className="col-4"><a href="javascript:void(0)" className="link"><i className="icon-people" /> <font className="font-medium">254</font></a></div>
                        <div className="col-4"><a href="javascript:void(0)" className="link"><i className="icon-picture" /> <font className="font-medium">54</font></a></div>
                      </div>
                    </center>
                  </div>
                  <div>
                    <hr /> </div>
                  <div className="card-body"> <small className="text-muted">Email address </small>
                    <h6>hannagover@gmail.com</h6> <small className="text-muted p-t-30 db">Phone</small>
                    <h6>+91 654 784 547</h6> <small className="text-muted p-t-30 db">Address</small>
                    <h6>71 Pilgrim Avenue Chevy Chase, MD 20815</h6>
                    <div className="map-box">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.1604841957!2d72.29955005258641!3d23.019996818380896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C+Gujarat!5e0!3m2!1sen!2sin!4v1493204785508" width="100%" height={150} frameBorder={0} style={{border: 0}} allowFullScreen />
                    </div> <small className="text-muted p-t-30 db">Social Profile</small>
                    <br />
                    <button className="btn btn-circle btn-secondary"><i className="fab fa-facebook" /></button>
                    <button className="btn btn-circle btn-secondary"><i className="fab fa-twitter" /></button>
                    <button className="btn btn-circle btn-secondary"><i className="fab fa-youtube" /></button>
                  </div>
                </div>
              </div>
              {/* Column */}
              {/* Column */} 
              <div className="col-lg-8 col-xlg-9 col-md-7">
                <div className="card">
                  {/* Nav tabs */}
                  <ul className="nav nav-tabs profile-tab" role="tablist">
                    <li className="nav-item"> <a className="nav-link active" data-toggle="tab" href="#home" role="tab">Timeline</a> </li>
                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#profile" role="tab">Profile</a> </li>
                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#settings" role="tab">Settings</a> </li>
                  </ul>
                  {/* Tab panes */}
                  <div className="tab-content">
                    <div className="tab-pane active" id="home" role="tabpanel">
                      <Acceuil/>
                    </div>
                   {/*second tab*/} 
                    <div className="tab-pane" id="profile" role="tabpanel">
                      <Info/>
                    </div>
                    <div className="tab-pane" id="settings" role="tabpanel">
           <Parametre/>
                    </div>
                  </div>
                </div>
              </div>
               {/* Column */} 
            </div>
            {/* Row */}
            
            {/* End PAge Content */}
            {/* Right sidebar */}
            {/* .right-sidebar */}
            <div className="right-sidebar">
              <div className="slimscrollright">
                <div className="rpanel-title"> Service Panel <span><i className="ti-close right-side-toggle" /></span> </div>
                <div className="r-panel-body">
                  <ul id="themecolors" className="m-t-20">
                    <li><b>With Light sidebar</b></li>
                    <li><a href="javascript:void(0)" data-theme="default" className="default-theme">1</a></li>
                    <li><a href="javascript:void(0)" data-theme="green" className="green-theme">2</a></li>
                    <li><a href="javascript:void(0)" data-theme="red" className="red-theme">3</a></li>
                    <li><a href="javascript:void(0)" data-theme="blue" className="blue-theme">4</a></li>
                    <li><a href="javascript:void(0)" data-theme="purple" className="purple-theme">5</a></li>
                    <li><a href="javascript:void(0)" data-theme="megna" className="megna-theme">6</a></li>
                    <li className="d-block m-t-30"><b>With Dark sidebar</b></li>
                    <li><a href="javascript:void(0)" data-theme="default-dark" className="default-dark-theme working">7</a></li>
                    <li><a href="javascript:void(0)" data-theme="green-dark" className="green-dark-theme">8</a></li>
                    <li><a href="javascript:void(0)" data-theme="red-dark" className="red-dark-theme">9</a></li>
                    <li><a href="javascript:void(0)" data-theme="blue-dark" className="blue-dark-theme">10</a></li>
                    <li><a href="javascript:void(0)" data-theme="purple-dark" className="purple-dark-theme">11</a></li>
                    <li><a href="javascript:void(0)" data-theme="megna-dark" className="megna-dark-theme ">12</a></li>
                  </ul>
                  <ul className="m-t-20 chatonline">
                    <li><b>Chat option</b></li>
                    <li>
                      <a href="javascript:void(0)"><img src="../assets/images/users/1.jpg" alt="user-img" className="img-circle" /> <span>Varun Dhavan <small className="text-success">online</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="../assets/images/users/2.jpg" alt="user-img" className="img-circle" /> <span>Genelia Deshmukh <small className="text-warning">Away</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="../assets/images/users/3.jpg" alt="user-img" className="img-circle" /> <span>Ritesh Deshmukh <small className="text-danger">Busy</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="../assets/images/users/4.jpg" alt="user-img" className="img-circle" /> <span>Arijit Sinh <small className="text-muted">Offline</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="../assets/images/users/5.jpg" alt="user-img" className="img-circle" /> <span>Govinda Star <small className="text-success">online</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="../assets/images/users/6.jpg" alt="user-img" className="img-circle" /> <span>John Abraham<small className="text-success">online</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="../assets/images/users/7.jpg" alt="user-img" className="img-circle" /> <span>Hritik Roshan<small className="text-success">online</small></span></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"><img src="../assets/images/users/8.jpg" alt="user-img" className="img-circle" /> <span>Pwandeep rajan <small className="text-success">online</small></span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* End Right sidebar */}
        
          </div> 
            {/* <!-- End Container fluid  --> */}
            </div>
           
            
           
       


     );
  }
}
 
export default Profil;