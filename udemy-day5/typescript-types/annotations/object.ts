const earthquake = {
    date: new Date(),
    velocity: 4.5
  }
  
  const logVelocity = ({ date, velocity }: { date: Date, velocity: number }): void => {
    console.log(date)
    console.log(velocity)
  }
  
  logVelocity(earthquake)
  
  const client = {
    id: "1234",
    age: 24,
    BMI: 1.5,
    condition: {
      mass: 80,
      height: 185,
    },
    setBMI(mass: number, height: number): void {
      this.BMI = mass / (height * height);
    }
  }
  
  const { id }: { id: string, age: number } = client
  const {
    condition: { mass, height },
  }: { condition: { mass: number, height: number } } = client
  