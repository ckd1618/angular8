var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
    // index1: function(req,res){
    //     console.log('index');
    //     Product.find({}, function(err, products){
    //         res.json(products);
    //     })
    // },

    // id2: function(req,res){
    //     console.log('id2');
    //     Product.findOne({_id: req.params.id}, function(err, product){
    //         res.json(product);
    //     })
    // },

    // id2P: (req,res)=>{
    //     console.log('id2P');
    //     Product.remove({_id:req.params.id}, function(err){
    //         if(err){
    //             console.log("error");
    //             res.json(err);
    //         }else{
    //             res.json({message: "Product Deleted"});
    //         }
    //     })
    // },

    // new3P: function(req,res){
    //     console.log('new3P');
    //     var newProduct = new Product(req.body);
    //     newProduct.save(function(err){
    //         if(err){
    //             console.log('error');
    //             res.json(err);
    //         }else{
    //             console.log('new3P success');
    //             res.json(newProduct);
    //         }
    //     })
    // },

    // idedit4P: (req,res) =>{
    //     console.log('idedit4P');
    //     Product.findOne({_id: req.params.id}, function(err, product){
    //         product.name = req.body.name;
    //         product.qty = req.body.qty;
    //         product.price = req.body.price;
    //         product.save(function(err){
    //             if (err){
    //                 res.json(err);
    //             }else{
    //                 res.json(product);
    //             }
    //         })
    //     })
    // }

}
