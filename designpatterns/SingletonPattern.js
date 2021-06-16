class FoodLogger {
  foodLog = [];
  log(order) {
    this.foodLog.push(order);
  }
  getAllLogs() {
    return this.foodLog;
  }
}

class SingletonFoodLogger {
  constructor() {
    if (!SingletonFoodLogger.instance) {
      SingletonFoodLogger.instance = new FoodLogger();
    }
  }

  getInstance() {
    return SingletonFoodLogger.instance;
  }
}

//---------------------------------------------------------
const foodLogger1 = new SingletonFoodLogger().getInstance();
foodLogger1.log("Ordered Mobile");

const foodLogger2 = new SingletonFoodLogger().getInstance();
foodLogger2.log("Ordered TV");

console.log("AllLogs=", foodLogger2.getAllLogs());
