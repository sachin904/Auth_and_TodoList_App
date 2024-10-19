const express=require('express');
const app=express();


const jwt =require('jsonwebtoken');
const JWT_SECRET="sachin627y27t7";
app.use(express.json());
let users =[];
function logger(req,res,next){
    console.log("method:"+req.method);
    console.log("URL:"+req.url);
    console.log("time:"+new Date());
    next();
}
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.use(logger);

app.post("/signup",function(req,res){
    const username= req.body.username;
    const password= req.body.password;
    let user=users.find(u=>u.username===username );
    if(user){
        res.json({
            msg:"you are already signed up"
        })
    }
    else{
        users.push({
            username:username,
            password:password
        })
        
    }
    console.log(users);
    res.json({
       msg: "you signed up" 
    })

})
app.post("/signin",function(req,res){
    const username= req.body.username;
    const password= req.body.password;
    const token= jwt.sign({username},JWT_SECRET);
    let user=users.find(u=>u.username==username&& u.password==password);
    if(user){
        
        
        res.json({
            token:token
        })
    }
   else{
    res.status(403).json({
        msg:"unautorized"
    })
   }
})
function auth(req,res,next){
    const token = req.headers.token;
    const decodedInformation=jwt.verify(token,JWT_SECRET);
    const username=decodedInformation.username;
    if(username){
        req.username=username;
        next();
    }
    else{
        res.json({
            msg:"you are not logged in"
        })
    }
}

app.get("/me",auth,function(req,res){
   
    let user=users.find(u=>u.username===req.username);
    if(user){
        res.json({
            username:user.username,
            password:user.password
        })
            
    }
    else{
        res.status(403).json({
            msg:"unautorized"
        })
       }

})
app.get("/todos",auth,function(req,res){
    res.json({
        msg:"todos list"
    })

            
    });
app.listen(3000);