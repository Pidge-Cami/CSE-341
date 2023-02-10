const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');


router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.createContact);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
router.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swaggerSpec));
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;
