import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';





const PassengerNew = (props) =>
{

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const [formData , setFormData ] = useState (
        {
            firstName : '',
            lastName  : '',
            age       : '',
            gender:'',
            dob :'',
            passportNo : '',
            issueDate : '',
            expiryDate : '',
            aadharNo : '',
            address : '',
            address2 : '',
            state : '',
            city : '',
            pincode : '',
            passportImage:[],
            adharImage:[]


        }
      
    );
    
  const eachPassData=
  {
    "age": formData.age,
    "gender": formData.gender,
    "firstName": formData.firstName,
    "lastName": formData.lastName,
    "dob": formData.dob,
    "passportImage":formData.passportImage,
    "adharNo": formData.aadharNo,
    "adharImage": formData.adharImage,
    "addressDto": {
      "adrLine1": formData.address,
      "adrLine2": formData.aadharNo,
      "city": formData.city,
      "state": formData.state,
      "country": "string",
      "zipCode": formData.pincode
    },
    "seatNumber": props.seatingNumber,
    "passport": {}
  }

     // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform further actions with the form data here
    console.log(formData);
  };

  // Update form data as the user types
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleClick = () => {
    console.log("in click")
    setIsButtonDisabled(true);

    props.toAddPassangerDeatail(eachPassData);
  };


    return (
        <>
         <div className="container">
            <div className="row my-4">
              <div className="col-lg-10 mx-auto">
                <div className="card shadow">
                  <div className="card-header">
                    <center><h1>Add Passenger Details</h1></center>
                  </div>
                  <div className="card-body p-4">
                    <div >
                      <div id="show_item">
                        <div className="row">
                          ======================================================================================
                        </div>
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            <input type="text" name="firstName" className="form-control" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} />
                          </div>
                          <div className="col-md-3 mb-3">
                            <input type="text" name="lastName" className="form-control" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange}/>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            Age
                            <input type="number" name="age" className="form-control" placeholder="Age" value={formData.age} onChange={handleInputChange} style={{marginTop: '22px'}}  />
                          </div>
                          <div className="col-md-3 mb-3">
                            DOB
                            <br></br>
                            <input type="date" name="dob" className="form-control" placeholder="Date of Birth" value={formData.dob} onChange={handleInputChange}/>
                          </div>
                          <div className="col-md-4 mb-3">
                            Gender
                            <input type="text" name="gender" className="form-control" placeholder="gender" value={formData.gender} onChange={handleInputChange} style={{marginTop: '22px'}}  />
                          </div>                                    
                        </div>
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            <input type="number" name="passportNo" className="form-control" placeholder="Passport No" value={formData.passportNo} onChange={handleInputChange}/>
                          </div>
                          <div className="col-md-3 mb-3">      
                          Upload Passport image                                  
                          <input type="file" id="myFile" name="passportImage" value={formData.passportImage}  onChange={handleInputChange} />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            Passport Issue Date
                            <input type="date" name="issueDate" className="form-control" placeholder="Date of Birth" value={formData.issueDate} onChange={handleInputChange}/>
                          </div>    
                          <div className="col-md-4 mb-3">
                            Passport Expiry Date
                            <input type="date" name="expiryDate" className="form-control" placeholder="Date of Birth" value={formData.expiryDate} onChange={handleInputChange}/>
                          </div>    
                        </div>
                        <div className="row">
                          <div className="col-md-4 mb-3">
                          <input type="number" name="aadharNo" className="form-control" placeholder="Aadhar No" value={formData.aadharNo} onChange={handleInputChange}/>
                          </div>
                          <div className="col-md-3 mb-3"> Upload adhar image                                    
                          <input type="file" id="myFile" name="adharImage" value={formData.adharImage}  onChange={handleInputChange} />
            
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-8 mb-3">
                            Address
                            <input type="text" name="address" className="form-control" placeholder=" " value={formData.address} onChange={handleInputChange} />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-8 mb-3">
                            Address 2
                            <input type="text" name="address2" className="form-control" placeholder=" " value={formData.address2} onChange={handleInputChange} />
                          </div>
                        </div>
                        <div className="row">
                            State
                          <div className="col-md-4 mb-3">
                          <input type="text" name="state" className="form-control" placeholder=" " value={formData.state} onChange={handleInputChange} />
                          </div>
                          <div className="col-md-3 mb-3">
                            City
                          <input type="text" name="city" className="form-control" placeholder=" " value={formData.city} onChange={handleInputChange} />
                          </div>
                          <div className="col-md-3 mb-3">
                            Pincode
                          <input type="number" name="pincode" className="form-control" placeholder="" value={formData.pincode} onChange={handleInputChange} />
                          </div>
                          <div className="row">
                            ======================================================================================
                          </div>
                        </div>
                        {/* <div className="col-md-2 mb-3 d-grid">
                          <button className="btn btn-success add_item_btn">add more</button>
                        </div> */}
                      </div>
                      <div>
      <button onClick={handleClick} disabled={isButtonDisabled}>
        {isButtonDisabled ? 'added' : 'add passanger'}
      </button>
    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></>
    )
}

export default PassengerNew;