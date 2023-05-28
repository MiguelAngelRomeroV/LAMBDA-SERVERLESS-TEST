const { swapiService } = require('../services/swapi.service')

const router = require('express').Router()

router.get('/:id', async (req, res) => {
    try {
        const dataSWAPI = await swapiService.getDataOfSWAPI(req.params.id);
        res.send({dataSWAPI});
    } catch (error) {
         return res.send({
            status: 500,
            error
         })
    }
})

module.exports  = router