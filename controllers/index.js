const axios = require('../Axios.js')

exports.getRates = async (req, res) => {
    const { base, currency } = req.query
    console.log(currency)
    try {
        // Error checks before proceeding
        if (!base) {
            const error = new Error('Please include a base currency')
            error.statusCode = 400
            throw error
        }
        if (!currency && currency != '') {
            const error = new Error('Please include currency(ies) you want to compare with')
            error.statusCode = 400
            throw error
        }

        const URL = `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${currency}`
        const request = await axios.get(URL)

        // check if request is okay before procceding
        if (request.status !== 200) {
            const error = new Error('Please check your request throughly')
            error.statusCode = request.status
            throw error
        }

        const requestData = request.data

        const dataToSendBack = {
            result: {
                base: base,
                date: requestData.date,
                rates: requestData.rates
            }
        }
        return res.status(200).json({
            ...dataToSendBack
        })
        
    } catch (err) {
        res.status(err.statusCode || 500).json({
            error: err.message
        })
    }
}