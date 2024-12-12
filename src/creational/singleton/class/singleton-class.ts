// import { BASE_URL, API_KEY } from '../../../utils/constants';
import { ApiResponse } from '../interfaces/api-response';

export class ApiManager {
  private static instance: ApiManager;

  private constructor() {}

  public static getInstance(): ApiManager {
    if (!ApiManager.instance) {
      ApiManager.instance = new ApiManager();
    }
    return ApiManager.instance;
  }

  public async get(url: string): Promise<ApiResponse> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return (await response.json()) as ApiResponse;
    } catch (error) {
      console.error('Failed to fetch data:', error);
      throw error;
    }
  }
}

const apiManager1 = ApiManager.getInstance();
const apiManager2 = ApiManager.getInstance();

// Перевірка того, що екземпляри є однаковими
console.log(apiManager1 === apiManager2); // Виведе: true

// apiManager1
//   .get(`${BASE_URL}?q=Lviv&appid=${API_KEY}&units=metric`)
//   .then(data => console.log('Data fetched:', data))
//   .catch(error => console.error('Error fetching data:', error));
