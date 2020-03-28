const {Router}= require('express');
const faker = require('faker');
const Product = require('../model/Product')
const router = Router();


router.get('/', async(req,res)=>{
    const products = await  Product.find()
    res.render('index', {products});
})

router.get('/add-product',(req,res)=>{
    res.render('addProduct')
})

router.post('/add-product',async  (req,res)=>{
    const product = new Product({
        category:req.body.category,
        name:req.body.name,
        price:req.body.price,
        cover:faker.image.image()
    })
    await product.save();
    res.redirect('/')
})

router.get('/products/:page', (req,res)=>{
    let page = req.params.page || 1
    let numPage = 9
    Product
    .find({}) // finding all documents
    .skip((numPage * page) - numPage) // in the first page the value of the skip is 0
    .limit(numPage) // output just 9 items
    .exec((err, products) => {
      Product.count((err, count) => { // count to calculate the number of pages
        if (err) return next(err);
        res.render('products', {
          products,
          current: page,
          pages: Math.ceil(count / numPage)
        });
      });
    });
});


router.get('/generate-faker-date',async (req,res)=>{
    for(let i=1 ;i<=50 ; i++){
     const product = new Product({
           category:faker.commerce.department(),
           name:faker.commerce.productName(),
           price:faker.commerce.price(),
           cover:faker.image.image()
       })
       await product.save();
    }
    res.redirect('/')
     
})

module.exports = router;
