import axios from 'axios';
class JeopardyService {
    constructor(){ 
        this.url ='http://jservice.io/api/random?count=25'; 
     
        this.client = axios.create();
    }
    getQuestion(){
        return this.client.get(this.url);
    }
}
export default JeopardyService;