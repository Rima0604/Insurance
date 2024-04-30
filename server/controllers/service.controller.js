import Bike from '../models/BikeDetails.js';
import Car from '../models/CarDetail.js'; 
import Customer from "../models/CustomerDetail.js";
import Health from '../models/HealthDetail.js'; 
import Travel from '../models/TravelDetail.js'; 

export const createBike = async (req, res) => {
  try {
    const { bikeNumber, mobileNumber, email , pinCode } = req.body;
    
    const existingBike = await Bike.findOne({ $or: [{ bikeNumber }, { mobileNumber }, { email }] });
    if (existingBike) {
      return res.status(400).json({ error: 'Bike with this number, mobile number, or email already exists' });
    }
    const newBike = new Bike({
        BikeNumber: req.body.bikeNumber,
        MobileNumber: req.body.mobileNumber,
        Email: req.body.email,
        PinCode: req.body.pinCode
       
      })
    const savedBike = await newBike.save();
    res.status(201).json(savedBike);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllBikes = async (req, res) => {
  try {
    const bikes = await Bike.find();
    res.status(200).json(bikes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBikeById = async (req, res) => {
  try {
    const bike = await Bike.findById(req.params.id);
    if (!bike) {
      return res.status(404).json({ message: 'Bike not found' });
    }
    res.status(200).json(bike);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBike = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      BikeNumber,
      MobileNumber,
      Email,
      PinCode
      
    } = req.body;

    const updatedBike = await Bike.findByIdAndUpdate(
      id,
      {
      BikeNumber,
      MobileNumber,
      Email,
      PinCode

      },
      { new: true }
    );

    if (!updatedBike) {
      return res.status(404).json({ message: "Bike record not found" });
    }

    res.status(200).json(updatedBike);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBikeById = async (req, res) => {
  try {
    const deletedBike = await Bike.findByIdAndDelete(req.params.id);
    if (!deletedBike) {
      return res.status(404).json({ message: 'Bike not found' });
    }
    res.status(200).json({ message: 'Bike deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Controller for creating a new car
const createCar = async (req, res) => {
  try {
    const { carNumber, mobileNumber, email, pinCode } = req.body;
    
    const existingCar = await Car.findOne({ $or: [{ carNumber }, { mobileNumber }, { email }] });
    if (existingCar) {
      return res.status(400).json({ error: 'Car with this number, mobile number, or email already exists' });
    }

    const newCar = new Car({
      carNumber,
      mobileNumber,
      email,
      pinCode,
    });

    await newCar.save();

    res.status(201).json({ message: 'Car registration successfully', car: newCar });
  } catch (error) {
    res.status(500).json({ error: 'Failed to registration car', details: error.message });
  }
};

// Controller for getting all cars
const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cars', details: error.message });
  }
};

// Controller for getting a car by ID
const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ error: 'Car not found' });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch car', details: error.message });
  }
};

export const updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const { carNumber, mobileNumber, email, pinCode } = req.body;

    const updateCar = await Car.findByIdAndUpdate(
      id,
      {
        carNumber,
        mobileNumber,
        email,
        pinCode
      },
      { new: true }
    
    );
    if (!updateCar) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.status(200).json(updateCar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Controller for deleting a car by ID
const deleteCarById = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) {
      return res.status(404).json({ error: 'Car not found' });
    }
    res.status(200).json({ message: 'Car deleted successfully', car });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete car', details: error.message });
  }
};

// Exporting all controller functions
export { createCar, getAllCars, getCarById, deleteCarById };



// Controller function to create a new customer
export const createCustomer = async (req, res) => {
  try {
    const newCustomer = new Customer({
      Name: req.body.name,
      MobileNumber: req.body.mobileNumber,
      Email: req.body.email,
      ZipCode: req.body.zipCode,
      Address: req.body.address
  });
    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to get all customers
export const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get a single customer by ID
export const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update a customer by ID
export const updateCustomerById = async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to delete a customer by ID
export const deleteCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("customer",id);

    const deletedUser = await Customer.findByIdAndDelete({_id:id});
    //const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
    if (!deletedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Create a new health record
export const createHealthRecord = async (req, res) => {
  try {
    const {
      Name,
      Gender,
      Age,
      MobileNumber,
      BirthDate
    } = req.body;

    const newHealthRecord = new Health({
      Name,
      Gender,
      Age,
      MobileNumber,
      BirthDate
    });

    const savedHealthRecord = await newHealthRecord.save();
    res.status(201).json(savedHealthRecord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all health records
export const getAllHealthRecords = async (req, res) => {
  try {
    const healthRecords = await Health.find();
    res.status(200).json(healthRecords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single health record by ID
export const getHealthRecordById = async (req, res) => {
  try {
    const { id } = req.params;
    const healthRecord = await Health.findById(id);
    
    if (!healthRecord) {
      return res.status(404).json({ message: "Health record not found" });
    }
    
    res.status(200).json(healthRecord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a health record by ID
export const updateHealthRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      Name,
      Gender,
      Age,
      MobileNumber,
      BirthDate
    } = req.body;

    const updatedHealthRecord = await Health.findByIdAndUpdate(
      id,
      {
        Name,
        Gender,
        Age,
        MobileNumber,
        BirthDate
      },
      { new: true }
    );

    if (!updatedHealthRecord) {
      return res.status(404).json({ message: "Health record not found" });
    }

    res.status(200).json(updatedHealthRecord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a health record by ID
export const deleteHealthRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedHealthRecord = await Health.findByIdAndDelete(id);

    if (!deletedHealthRecord) {
      return res.status(404).json({ message: "Health record not found" });
    }

    res.status(200).json({ message: "Health record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Create a new Travel record
export const createTravel = async (req, res) => {
  try {
    const newTravel = new Travel({
      countryName: req.body.countryName,
      startDate: req.body.startDate,
      endDate: req.body.endDate
    });
    const savedTravel = await newTravel.save();
    res.status(201).json(savedTravel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all Travel records
export const getAllTravels = async (req, res) => {
  try {
    const travels = await Travel.find();
    res.status(200).json(travels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Travel record by ID
export const getTravelById = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);
    if (!travel) {
      return res.status(404).json({ message: 'Travel not found' });
    }
    res.status(200).json(travel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Travel record by ID
export const updateTravelById = async (req, res) => {
  try {
    const updatedTravel = await Travel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTravel) {
      return res.status(404).json({ message: 'Travel not found' });
    }
    res.status(200).json(updatedTravel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Travel record by ID
export const deleteTravelById = async (req, res) => {
  try {
    const deletedTravel = await Travel.findByIdAndDelete(req.params.id);
    if (!deletedTravel) {
      return res.status(404).json({ message: 'Travel not found' });
    }
    res.status(200).json({ message: 'Travel deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
