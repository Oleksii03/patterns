import { API_KEY, BASE_URL } from '../../utils/constants';
import { ApiManager } from './class/singleton-class';

function getApiData(obj: ApiManager) {
  obj
    .get(`${BASE_URL}?q=Lviv&appid=${API_KEY}&units=metric`)
    .then(data => console.log('Data fetched:', data))
    .catch(error => console.error('Error fetching data:', error));
}

getApiData(ApiManager.getInstance());
