import axios from 'axios';
function UserSignAPI(userid,password) {
   
        const url= "http://localhost:63617/api/UserAccounts1/signin/"+userid+"/"+password;
     
        let responseere =  axios.get(url).then((res) => {
                    console.log(res.data);
                    return res.data; 
             });
        return responseere;

}

export default UserSignAPI;