const { Router } = require('express');
const router = Router();
const db = require('../database')


router.post('/send-message', (req, res) => {
    const { name, email, description, } = req.body;
    if (name && email && description) {
        try {
            db.query(`INSERT INTO feedback VALUES('${name}', '${email}', '${description}')`)
            res.status(200).send({ msg: 'Message sent' })
        }
        catch (e) {
            console.log(e,)
        }
    }

}
)

module.exports = router;