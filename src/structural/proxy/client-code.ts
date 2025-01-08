import { DataService } from './interfaces/data-service';
import { RealDataService } from './classes/real-data-service';
import { CachedDataServiceProxy } from './classes/cached-data-service-proxy';

const cachedProxy = new CachedDataServiceProxy(new RealDataService());

function clientCode(data: DataService) {
  data.getData();
}

clientCode(cachedProxy); // Завантаження даних із основного сервісу...
clientCode(cachedProxy); // Повернення кешованих даних.
