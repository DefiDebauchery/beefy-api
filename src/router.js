'use strict';

const Router = require('koa-router');
const router = new Router();

const noop = require('./api/noop');
const stats = require('./api/stats');
const supply = require('./api/supply');
const price = require('./api/price');
const gov = require('./api/stats/gov');
const smart = require('./api/smart');
const cmc = require('./api/cmc');

router.get('/apy', stats.apy);
router.get('/smart', smart.getSmartcakeData);
router.get('/cmc', cmc.vaults);

router.get('/supply', supply.supply);
router.get('/supply/total', supply.total);
router.get('/supply/circulating', supply.circulating);

router.get('/earnings', gov.earnings);
router.get('/holders', gov.holderCount);

router.get('/pancake/price', price.pancakePrices);
router.get('/bakery/price', price.bakeryPrices);
router.get('/nyanswop/price', price.nyanswopPrices);

router.get('/pancake/lps', price.cakeLpPrices);
router.get('/bakery/lps', price.bakeryLpPrices);
router.get('/jetfuel/lps', price.jetfuelLpPrices);
router.get('/bdollar/lps', price.bdollarLpPrices);
router.get('/helmet/lps', price.helmetLpPrices);
router.get('/kebab/lps', price.kebabLpPrices);
router.get('/monster/lps', price.monsterLpPrices);
router.get('/nyanswop/lps', price.nyanswopLpPrices);
router.get('/sponge/lps', price.spongeLpPrices);
router.get('/auto/lps', price.autoLpPrices);
router.get('/mdex/lps', price.mdexLpPrices);
router.get('/bolt/lps', price.boltLpPrices);
router.get('/', noop);

// FIXME: restoring partial service
// router.get('/narwhal/lps', price.narLpPrices);
// router.get('/thugs/tickers', proxy.thugs);
// router.get('/thugs/lps', price.thugsLpPrices);

module.exports = router;
