import qs from 'qs';

const CLIENT_IT = 'd65cabf0f276c1e';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const querystring = {
        client_id: CLIENT_IT,
        response_type: 'token'
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
  }  
};