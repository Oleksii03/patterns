import { DataService } from '../interfaces/data-service';

export class RealDataService implements DataService {
  getData(): string {
    return 'Дані з сервісу.';
  }
}
