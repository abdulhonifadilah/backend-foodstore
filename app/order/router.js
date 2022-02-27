const router = require("express").Router();
const { police_check } = require("../../middleware");
const orderController = require("./controller");

router.post("/orders", police_check("create", "Order"), orderController.store);

router.get('/orders', police_check('view', 'Order'), orderController.index);

router.get('/orders/:id', police_check('view', 'Order'), orderController.show);


module.exports= router;