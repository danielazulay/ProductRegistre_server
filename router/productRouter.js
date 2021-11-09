const router = require('express').Router()
const productModel = require('../model/productModel')

router.get('/product/all',async(req,res)=>{

    try{

const resp = await productModel.find({})

return res.status(200).json(resp)


    }catch(err){

        console.log(err)
    }
})



router.get('/product/:id',async(req,res)=>{

    try{

const {id} = req.params

const resp = await productModel.findById({_id:id})

return res.status(200).json(resp)

    }catch(err){

        console.log(err)
    }
})


router.post('/product/new',async(req,res)=>{

    try{
        const data = req.body

        const resp = await productModel.create({...data})
        return res.status(201).json(resp)



    }catch(err){

        console.log(err)
    }
})

router.put('/product/edit/:id',async(req,res)=>{

    try{
        const data = req.body
        const {id} = req.params

        const resp = await productModel.findOneAndUpdate({_id:id},{...data},{new:true})
        return res.status(200).json(resp)

        

    }catch(err){

        console.log(err)
    }
})


router.delete('/product/delete/:id',async(req,res)=>{
try{
    const {id} = req.params
    const resp = await productModel.deleteOne({_id:id})
    return res.status(200).json({})
}catch(err){

    console.log(err)
}
})


router.get('/estoque',async(req,res)=>{


const resposta = await productModel.aggregate([{
    $group:{
        _id:null,
        total:{$sum:"$qnt"},
    }
}])
return res.status(200).json(resposta)


})

router.get('/mapping',async(req,res)=>{

    const {pula} = req.body
    const {end} = req.body

    const resposta = await productModel.find().skip(pula).limit(end)
    return res.status(200).json(resposta)
    
    
    })

    router.get('/search',async(req,res)=>{

        const {word}=req.body
        const resp = await productModel.find({"$text":{"$search":"arroz"}})
        return res.status(200).json(resp)
    })




module.exports = router