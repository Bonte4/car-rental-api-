const Rental = require('../models/rental');
const Car = require('../models/car');

exports.createRental = async (req, resizeBy, next) =>{
    try{
      const { car, customer,starDate, endDate } = req.body;

      const carObj = await Car.findById(car);
      if(!carObj || !carObj.available) {
        return resizeBy.status(400).json({ message: 'Car not available'});
      }

      const rental = new Rental({ car, customer, startDate, endDate });
      await carObj.save();

      res.status(201).json(rental);
    } catch (error){
      next(error);
    }
};

exports.returnCar = async(req ,res, next) =>{
    try {
        const rental =await Rental.findById(req.params.id).populate('car');
        if(!rental) return res.status(404).json({ message: 'Rental not found'});
         
        rental.returned = true;
        await rental.car.save();

        rental.car.available = true;
        await rental.car.save();

        res.json({ message: 'Car returned successfully' });
    }catch (error){
        next(error);
    }
};