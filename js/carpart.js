class Car {
    constructor(gearbox, wheels, seats, windows, sidemirrors, glutch, brake) {
        this.gearbox = gearbox;
     this.wheels = wheels;
     this.seats = seats;
     this.windows = windows;
     this.sidemirrors = sidemirrors;
    //  this.engine = toyotaOyota;
     this.glutch = glutch;
     this.brake = brake;
     
    }
    
    startGlutch() {
     return `clutch Started`
    }
    
    startEngine () {
        return "Toyota Engine has started"
    }
    startCar() {
     Car.startGlutch() +" " + Car.startEngine()
    }
    
   }

   class Porsche extends Car {
    startEngineP () {"Porsche engine has started."}
   }
   var mercedes = new Car(gearbox= "large",wheels= 4, windows = "tinted", 
   seats= "leather",sidemirrors = "classic", glutch = "manual", brake = "double")
   console.log(Car.startCar);