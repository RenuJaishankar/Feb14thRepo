const express = require('express')
const app = express()
const port = 3004
const mongoose = require('mongoose')


//express boilerplate
app.get('/',(req, res) => res.send("Hello World!"))
app.listen(port, () => console.log(`Listening on port`))

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology:true})

const Dog = mongoose.model("Dog",{name:String})
const rover = new Dog({name:'Rover'})
const rex= new Dog({name:'Rex' })
//i'm creating a new object here

const Cat = mongoose.model("Cat",{name:String})
const cat1 = new Cat({name:'Olive'})
const cat2= new Cat({name:'Biscuit'})

const Vehicle = mongoose.model("Vehicle",{name:String})
const vehicle1 = new Vehicle({name:'Ford'})
const vehicle2 = new Vehicle({name:'Benz'})
rover.save().then(() => console.log('dog was saved'))
rex.save().then(() => console.log('rex was saved'))                                   
Dog.find().then(res=> console.log(res))
console.log(Dog.find())
cat1.save().then(() => console.log('cat1 was saved'))
cat2.save().then(() => console.log('Cat 2 is saved'))                   
Cat.find().then(res=> console.log(res))
console.log(Cat.find())
vehicle1.save().then(() => console.log('vehicle 1 was saved'))
vehicle2.save().then(() => console.log('vehicle 2 was saved'))
Vehicle.find().then(res=> console.log(res))
console.log(Vehicle.find())