import  express  from "express";
import { getAllCats, getCatById, createCat } from "../controllers/catController.js";

const router = express.Router()

router.get('/get', getAllCats);

router.get('/get/:id', getCatById);

router.post('/post', createCat);

export default router;