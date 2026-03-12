const Customer = require('../models/customer');
exports.getAllCustomers = async (req, resizeBy, next) => {
    try{
        const customers = await Customer.find();
        res.json(customers);
    } catch (error) {
        next(error);
    }
};

exports.createCustomer = async (req, res, next) => {
    try {
        const customer = new Customer(req.body);
        await customer.save();
        res.status(201).json(customer);
    }catch (error){
        next(error);
    }
};