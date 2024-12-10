// import './factory_method/factory-method';
// -----------------------------------------

interface Transport {
  deliver(): string;
}

class Car implements Transport {
  public deliver(): string {
    return 'Delivering by Car.';
  }
}

abstract class TransportCreator {
  public abstract createTransport(): Transport;

  public planDelivery(): string {
    const transport = this.createTransport();
    return `Planning delivery: ${transport.deliver()}`;
  }
}

class CarCreator extends TransportCreator {
  public createTransport(): Transport {
    return new Car();
  }
}

const carCreator = new CarCreator();
console.log(carCreator.planDelivery());
