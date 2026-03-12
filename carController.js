const Car = require('../models/car');

exports.getAllCars =async(req, res, next) =>{
    try{
        const cars = await Car.find();
        res.json(cars);
    }catch (error) {
        next(error);
    }
};

exports.createCar = async (req, res, next) =>{
    try{
        const car = new Car(req.body);
        await car.save();
        res.status(201).json(car);
    } catch (error) {
      next(error);
    }
};