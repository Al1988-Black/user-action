const express = require("express");
const Action = require("../models/Action");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
    try {
        const { _limit = 200 } = req.query;
        const list = await Action.find();
        res.status(200).send(list.slice(0, _limit));
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});

router.post("/", async (req, res) => {
    try {
        const newAction = await Action.create({
            ...req.body,
        });
        res.status(201).send(newAction);
    } catch (error) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
        });
    }
});
module.exports = router;
