import axios from 'axios'

//Create
export async function createProfile(postBody){
    try {
        let res=await axios.post("http://localhost:3300/api/create",postBody);
        if(res.status===200){
            return true;
        }
        else{
            return  false
        }

    }catch (e) {
        return  false
    }
}

//Read
export async function readProfile(){
    try {
        let res=await fetch("http://localhost:3300/api/read");
        let JSONData=await res.json();
        return JSONData['data'];
    }catch (e) {
        return []
    }
}

//Read By ID
export async function readProfileByID(id){
    try {
        let res=await fetch("http://localhost:3300/api/readById/"+id);
        let JSONData=await res.json();
        return JSONData['data'];
    }catch (e) {
        return []
    }
}

//Delete
export async function deleteProfile(id){
    try {
        let res=await axios.get("http://localhost:3300/api/delete/" +id);
        if(res.status===200){
            return true;
        }
        else{
            return  false
        }

    }catch (e) {
        return  false
    }
}

//Create
export async function updateProfile(postBody){
    try {
        let res=await axios.post("http://localhost:3300/api/update/" +id,postBody);
        if(res.status===200){
            return true;
        }
        else{
            return  false
        }

    }catch (e) {
        return  false
    }
}





