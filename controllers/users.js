const express = require('express')
const router = express.Router()
const jwt = require('jwt-simple')
const passport = require('../config/passport')
const config = require('../config/config')
const User = require('../models/User')

router.get('/', (req, res) => {
    User.find({}, (err, foundUsers) => {
        res.json(foundUsers);
    })
});

router.get('/loggedin', (req, res) => {
    User.find({ isLoggedIn: true }, (err, loggedIn)=>{
        res.send(loggedIn)
    })
})

router.post('/logout/:id', (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, {$set: {isLoggedIn: false }, new: true }, (err, theUser)=>{
        res.json(theUser)
        
    })
})


router.post('/register', (req, res) => {
    if (req.body.email && req.body.password) {
        let newUser = {
            email: req.body.email,
            password: req.body.password,
            isLoggedIn: true
        }
        User.findOne({email: req.body.email})
            .then((user) => {
                if (!user) {
                    User.create(newUser)
                        .then(user => {
                            if (user) {
                                var payload = {
                                    id: newUser.id
                                }
                                var token = jwt.encode(payload, config.jwtSecret)
                                res.json({
                                    token: token
                                })
                            } else {
                                res.sendStatus(401)
                            }
                        })
                } else {
                    res.sendStatus(401)
                }
            })
    } else {
        res.sendStatus(401)
    }
})

router.post('/login', (req, res) => {
    if (req.body.email && req.body.password) {
    User.findOne({email: req.body.email}).then(user => {
        if (user) {
            if (user.password === req.body.password) {
                var payload = {
                    id: user.id
                }  
                var token = jwt.encode(payload, config.jwtSecret)
                res.json({
                    token: token
                })
            } else {
                res.sendStatus(401)
            }
        } else {
            res.sendStatus(401)
        }
    })
    } else {
        res.sendStatus(401)
    }
})

router.delete('/delete/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id, (err, data) => {
        res.json(data);
    });
})

module.exports = router;
