import { DataService } from '../interfaces/data-service';
import { RealDataService } from './real-data-service';

export class CachedDataServiceProxy implements DataService {
  private readonly realDataService: RealDataService;
  private cachedData: string | null = null;

  constructor(realDataService: RealDataService) {
    this.realDataService = realDataService;
  }

  getData(): string {
    if (!this.cachedData) {
      console.log('Завантаження даних із основного сервісу...');
      this.cachedData = this.realDataService.getData();
    } else {
      console.log('Повернення кешованих даних.');
    }
    return this.cachedData;
  }
}
