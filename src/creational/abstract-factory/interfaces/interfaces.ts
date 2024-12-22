// Інтерфейси для продуктів
interface ElectricMoped {
  start(): string;
}

interface GasolineMoped {
  start(): string;
}

// Абстрактна фабрика
interface MopedFactory {
  createElectricMoped(): ElectricMoped;
  createGasolineMoped(): GasolineMoped;
}

export { ElectricMoped, GasolineMoped, MopedFactory };
