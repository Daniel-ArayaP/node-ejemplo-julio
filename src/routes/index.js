const { Router } = require('express');
const router = Router();

// Controller
const productsController = require('../controllers/products.controller');

// Routes
router.get('/', productsController.renderProductsView);

router.get('/home', productsController.renderProductsView);

router.get('/ubicacion', productsController.renderProductsView);

router.get('/product/:uri', productsController.renderProductPreview);

router.get('/', function(req, res, next) {
    options = {
      redirectURI: 'http://localhost:3000/oauth/callback',
      trial: false,
    };
    res.render('index', {
      title: 'Welcome',
      message: 'Link your email to get started.',
      url: Nylas.urlForAuthentication(options),
    });
  });
  
  router.get('/oauth/callback', function(req, res, next) {
    if (req.query.code) {
      Nylas.exchangeCodeForToken(req.query.code).then(function(token) {
        req.session.token = token;
        res.redirect('/dashboard');
      });
    } else if (req.query.error) {
      res.render('error', {
        message: req.query.reason,
        error: {
          status:
            'Please try authenticating again or use a different email account.',
          stack: '',
        },
      });
    }
  });

module.exports = router;