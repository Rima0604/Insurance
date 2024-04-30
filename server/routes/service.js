import express from 'express';
import {
  createBike,
  getAllBikes,
  getBikeById,
  updateBike,
  deleteBikeById,
} from '../controllers/service.controller.js';

import { createCar, 
  getAllCars, 
  getCarById,
  updateCar,
  deleteCarById } from '../controllers/service.controller.js';

import {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomerById,
  deleteCustomerById,
} from '../controllers/service.controller.js';

import {
  createHealthRecord,
  getAllHealthRecords,
  getHealthRecordById,
  updateHealthRecord,
  deleteHealthRecord
} from '../controllers/service.controller.js';

import {
  createTravel,
  getAllTravels,
  getTravelById,
  updateTravelById,
  deleteTravelById,
} from '../controllers/service.controller.js';

const router = express.Router();

router.post('/bikes', createBike);
router.get('/bikes', getAllBikes);
router.get('/bikes/:id', getBikeById);
router.put('/bikes/:id', updateBike);
router.delete('/bikes/:id', deleteBikeById);

router.post('/cars', createCar);
router.get('/cars', getAllCars);
router.get('/cars/:id', getCarById);
router.put('/cars/:id', updateCar);
router.delete('/cars/:id', deleteCarById);

router.post("/customer", createCustomer);
router.get("/customer", getAllCustomers);
router.get("/customer/:id", getCustomerById);
router.put("/customer/:id", updateCustomerById);
router.delete("/customer/:id", deleteCustomerById);

router.post('/health', createHealthRecord);
router.get('/health', getAllHealthRecords);
router.get('/health/:id', getHealthRecordById);
router.put('/health/:id', updateHealthRecord);
router.delete('/health/:id', deleteHealthRecord);


router.post('/travels', createTravel);
router.get('/travels', getAllTravels);
router.get('/travels/:id', getTravelById);
router.put('/travels/:id', updateTravelById);
router.delete('/travels/:id', deleteTravelById);

export default router;

