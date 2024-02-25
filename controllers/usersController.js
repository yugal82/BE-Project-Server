const Users = require('../models/usersModel');

const getUsers = async (req, res) => {
    try {
        const users = await Users.find();
        res.status(200).json({
            status: 'Success',
            message: 'Users found',
            length: users.length,
            data: users
        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message,
            error: error
        })
    }
}

const getUserByAddress = async (req, res) => {
    try {
        const address = req.params.address;
        const user = await Users.findOne({address:address});

        if(!user){
            res.status(404).json({
                status: 'Fail',
                message: 'User not found',
            })  
        } else {
            res.status(200).json({
                status:'Success',
                message: 'User found',
                data: user
            })
        }
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message,
            error: error
        })
    }
}

const postUser = async (req, res) => {
    try {
        const userData = {
            address: req.body.address, 
        };
        const user = await Users.findOne({address: req.body.address})
        if(user){
            res.status(400).json({
                status: 'Fail',
                message: 'User has already registered',
                data: user
            })
        } else {
            const newUser = new Users(userData);
            const saveUser = await newUser.save();

            res.status(200).json({
                status: 'success',
                message: 'User created successfully',
                data: saveUser
            })
        }
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message,
            error: error
        })
    }
}

const editInfo = async (req, res) => {
    try {
        const address = req.params.address;
        const data = {
            name: req?.body?.name,
            bannerImage: req?.body?.bannerImage,
            profileImage: req?.body?.profileImage,
            bio: req?.body?.bio,
        }
        const updatedUser = await Users.findOneAndUpdate({address: address}, data, {new: true})
        
        res.status(200).json({
            status: 'success',
            message: 'User updated successfully',
            data: updatedUser
        })
        
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message,
            error: error
        })
    }
}

module.exports = { getUsers, postUser, editInfo, getUserByAddress }