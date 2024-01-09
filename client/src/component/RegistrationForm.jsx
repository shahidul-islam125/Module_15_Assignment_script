import React, { useEffect, useState } from 'react';
import {toast, Toaster} from "react-hot-toast";
import { createProfile, readProfileByID } from '../APIRequest/APIRequest';
import {useNavigate} from 'react-router-dom'

const RegistrationForm = () => {
    let [FormValue, SetFormValue] = useState({firstName:"", lastName:"",gender:"", dateOfBirth: "", address: "", email:"", mobileNumber: "",nationality:"",  admissionDate:"", course:""})

    let [UpdateID, SetUpdateID] = useState(null)

    useEffect(() => {
        (async() => {
            let params = new URLSearchParams(window.location.search)
            let id = params.get("id")
            SetUpdateID(id)
            if(id !== null){
                await FillForm(id)
            }
        })()
    }, [])
    
    const FillForm =async (id) => {
        let res = await readProfileByID(id)
        SetFormValue({
            firstName:res[0]['firstName'],
            lastName:res[0]['lastName'],
            gender:res[0]['gender'], 
            dateOfBirth: res[0]['dateOfBirth'],
            address: res[0]['address'], 
            email:res[0]['email'], 
            mobileNumber: res[0]['mobileNumber'],
            nationality:res[0]['nationality'],  
            admissionDate:res[0]['admissionDate'], 
            course:res[0]['course'] 
        })
        
        
    }

    let navigate = useNavigate()
    const Save = async () => {
        if(FormValue.firstName.length===0){
            toast.error("firstName Required !")
        }
        else if(FormValue.lastName.length===0){
            toast.error("lastName Required !")
        }
        else if(FormValue.gender.length===0){
            toast.error("gender Required !")
        }
        else if(FormValue.dateOfBirth.length===0){
            toast.error("dateOfBirth Required !")
        }
        else if(FormValue.address.length===0){
            toast.error("address Required !")
        }
        else if(FormValue.email.length===0){
            toast.error("email Required !")
        }
        else if(FormValue.mobileNumber.length===0){
            toast.error("mobileNumber Required !")
        }
        else if(FormValue.nationality.length===0){
            toast.error("nationality Required !")
        }
        else if(FormValue.admissionDate.length===0){
            toast.error("admissionDate Required !")
        }
        else if(FormValue.course.length===0){
            toast.error("course Required !")
        }
        else{
            console.log(FormValue)
            let res=await createProfile(FormValue);
            if(res){
            toast.success("Save successfully")
            setTimeout(() => navigate('/'), 1000);
            
            }else{
                toast.error("Request Fail!")
            }
        }

    }

    const InputOnChange = (name, value) => {
        SetFormValue((FormValue) => ({
            ...FormValue,
            [name]: value
        }))
    }
    return (
        <div>
            <div className='wraper'>
            <h3>STUDENT REGISTRATION FORM</h3> 
            <div>
                <label>First Name</label>
                <input value={FormValue.firstName} onChange={(e) => InputOnChange('firstName', e.target.value)} type="text" name="First_Name"/>
            </div>              
            <div>
                <label>Last Name</label>
                <input value={FormValue.lastName} onChange={(e) => InputOnChange('lastName', e.target.value)} type="text" name="Last_Name"/>
            </div>              
            <div>
                <label>Gender</label>
                <input type="radio" name="Gender" value="Male" checked={FormValue.gender === 'Male'} onChange={(e) => InputOnChange('gender',e.target.value)}/>Male

                <input type="radio" name="Gender" value="Female" checked={FormValue.gender === 'Female'} onChange={(e) => InputOnChange('gender', e.target.value)}/>Female
            </div>              
            <div>
                <label>Date of Birth</label>
                <input value={FormValue.dateOfBirth} onChange={(e) => InputOnChange('dateOfBirth', e.target.value)} type="text" name="dateOfBirth" />
            </div>              
            <div>
                <label>Address</label>
                <input value={FormValue.address} onChange={(e) => InputOnChange('address', e.target.value)} type="text" name="Address"></input>
                </div>              
            <div>
                <label>Email</label>
                <input value={FormValue.email} onChange={(e) => InputOnChange('email', e.target.value)}type="text" name="Email_Id"/>
            </div>              
            <div>
                <label>Mobile Number</label>
                <input value={FormValue.mobileNumber} onChange={(e) => InputOnChange('mobileNumber', e.target.value)} type="text" name="Mobile_Number" />
            </div>              
            <div>
                <label>Nationality</label>
                <input value={FormValue.nationality} onChange={(e) => InputOnChange('nationality', e.target.value)}type="text" name="nationality" />
            </div>              
            <div>
                <label>Admission Date</label>
                <input value={FormValue.admissionDate} onChange={(e) => InputOnChange('admissionDate', e.target.value)} type="text" name="Admission_date" />
            </div>              
            <div>
                <label>Course</label><br/>
                <input type="radio" name="Web_Development" value="Web Development" checked={FormValue.course === 'Web Development'} onChange={(e) => InputOnChange('course',e.target.value)}/>Web Development <br/>

                <input type="radio" name="Graphics_Designer" value="Graphics Designer" checked={FormValue.course === 'Graphics Designer'} onChange={(e) => InputOnChange('course',e.target.value)}/>Graphics Designer 

            </div>              
            <div> 
                <button onClick={Save}>Submit</button>
            </div>
            
        </div>
        <Toaster position='bottom-center' />
        </div>
        
    );
};

export default RegistrationForm;