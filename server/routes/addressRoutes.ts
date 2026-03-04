import express from "express"
import { protect } from "../middleware/auth.js";
import { addAddresses, deleteAddress, getAddresses, updateAdress } from "../controllers/addressController.js";

const AddressRouter = express.Router();

AddressRouter.get('/', protect, getAddresses);
AddressRouter.post('/', protect, addAddresses);
AddressRouter.put('/:id', protect,  updateAdress);
AddressRouter.delete('/:id', protect, deleteAddress)

export default AddressRouter;