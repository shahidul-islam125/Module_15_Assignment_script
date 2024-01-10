import React, { useEffect, useState } from 'react';
import {toast, Toaster} from "react-hot-toast";
import { createProfile, readProfileByID, updateProfile } from '../APIRequest/APIRequest';
import {useNavigate} from 'react-router-dom'

const RegistrationForm = () => {
    let [FormValue, SetFormValue] = useState({firstName:"", lastName:"",gender:"", dateOfBirth: "", address: "", email:"", phone: "",nationality:"",  admissionDate:"", courses:""})

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
            phone: res[0]['phone'],
            nationality:res[0]['nationality'],  
            admissionDate:res[0]['admissionDate'], 
            courses:res[0]['courses'] 
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
        else if(FormValue.phone.length===0){
            toast.error("mobileNumber Required !")
        }
        else if(FormValue.nationality.length===0){
            toast.error("nationality Required !")
        }
        else if(FormValue.admissionDate.length===0){
            toast.error("admissionDate Required !")
        }
        else if(FormValue.courses.length===0){
            toast.error("course Required !")
        }
        else{
            if(UpdateID === null){
                    let res=await createProfile(FormValue);
                if(res){
                    toast.success("Save successfully")
                    setTimeout(() => navigate('/'), 1000);
                }else{
                    toast.error("Request Fail!")
            }
            }else{
                let res=await updateProfile(UpdateID, FormValue);
                if(res){
                    toast.success("Successfully updated")
                    setTimeout(() => navigate('/'), 1000);
                }else{
                    toast.error("Request Fail!")
                }
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
                <input value={FormValue.phone} onChange={(e) => InputOnChange('phone', e.target.value)} type="text" name="Mobile_Number" />
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
                <label>Courses</label><br/>
                <input type="radio" name="Web_Development" value="Web Development" checked={FormValue.courses === 'Web Development'} onChange={(e) => InputOnChange('courses',e.target.value)}/>Web Development <br/>

                <input type="radio" name="Graphics_Designer" value="Graphics Designer" checked={FormValue.courses === 'Graphics Designer'} onChange={(e) => InputOnChange('courses',e.target.value)}/>Graphics Designer 

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
//check the git update