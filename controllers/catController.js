import catModel from "../models/catModel.js";

export const createCat = async (req, res) => {
    try {
        const newCat = new catModel({...req.body})
        await newCat.save();
        res.status(201).send("New User is created");
    } catch (error) {
        res.status(405).send(error);
        console.error("error");
    };
}

export const getAllCats = async (req, res) => {
    try {
        const allCats = await catModel.find();
        res.status(202).json(allCats)
    } catch (error) {
        console.log("error");
    };
};

export const getCatById = async (req, res) => {
    try {
        const cat = await catModel.findById(req.params.id);
        res.status(200).json(cat);
    } catch (error) {
        console.log("error");
    }
}