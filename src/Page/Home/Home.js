import React from 'react';
import Navbar from '../../Components/Navbar/Navbar.js';
import Country from '../../Components/Home/Country.js'; 
import  './Home.css'; 
class Home extends React.Component{

    constructor(props){
    	super(props);
    }

    render(){
    	return(<div> 
            <Navbar/>
             <div className="pt-4 bg-blue-dark" >
                <div className="container" >
                    <div className="row text-white mb-4">
                      <div className="col-md-5">
                          <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                  <span className="input-group-text input-blue-dark" >
                                       <i class="fa fa-search mb-1 mt-1" aria-hidden="true"></i>
                                  </span>
                              </div>
                              <input type="text" className="form-control input-blue-dark" placeholder="Username" />
                           </div>
                       </div>
                       <div className="col-4"> </div>
                       <div className="col-md-3">
                           <select className="form-select input-blue-dark" style={{width:"85%"}}>
                              <option selected>Filter by Region</option>
                              <option>...</option>
                           </select>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-md-3 mb-4">
                           <Country/>
                        </div>
                        <div className="col-md-3 mb-4">
                            <Country/>
                        </div>
                        <div className="col-md-3 mb-4">
                            <Country/>
                        </div>
                        <div className="col-md-3 mb-4">
                            <Country/>
                        </div>
                   </div>
               </div>
            </div>
        </div>
            )
    }

}

export default Home