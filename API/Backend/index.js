import express  from "express";

const app = express()

const port = process.env.PORT || 3000

app.get('/api/products',(req,res)=>{
    const products = [
        {
            id:1,
            name:'table wooden',
            price: 200
        },
        {
            id:2,
            name:'table glass',
            price: 300
        },
        {
            id:3,
            name:'table metal',
            price: 400
        },
        {
            id:4,
            name:'table polyster',
            price: 500
        },
        {
            id:5,
            name:'table plastic',
            price: 100
        },
       
    ]
    // http://localhost:3000/api/products?search=metal
    // ?= query parameter
    // request after some time then we use simulation by using setTimeout

    if(req.query.search){
        const filterProducts = products.filter(product=> product.name.includes(req.query.search))
        res.send(filterProducts);
        return;
    }
    setTimeout(()=>{
       res.send(products)
    },3000)
    
})


app.listen(port, ()=>{
    console.log(`Server listen on ${port}`)
})


export default app;