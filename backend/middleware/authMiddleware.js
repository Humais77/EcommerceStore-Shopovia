const jwt = require("jsonwebtoken");
const User = require("../models/Users");
const protect = async (req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            // req.user = await User.findById(decoded.user.id).select("-password");
            req.user = await User.findById(decoded.id).select("-password");


            next();
        }catch(error){
            console.error("Token verification failed:",error)
            res.status(401).json({message:"Not authorized, token failed"})
        }
    }else{
        res.status(401).json({message:"Not authorized, no token provided"})
    }
}


const admin = (req,res,next)=>{
    if(req.user && req.user.role ==="admin"){
        next();
    }else{
        res.status(403).json({message:"Not authorized as an admin"});
    }
}
module.exports = {protect,admin};
// === FIXED AUTH MIDDLEWARE (authMiddleware.js) ===
// const jwt = require("jsonwebtoken");
// const User = require("../models/Users");

// const protect = async (req, res, next) => {
//   let token;
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       token = req.headers.authorization.split(" ")[1];
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       // FIX: decoded.id instead of decoded.user._id
//       req.user = await User.findById(decoded.user.id).select("-password");

//       if (!req.user) {
//         return res.status(401).json({ message: "User not found" });
//       }

//       next();
//     } catch (error) {
//       console.error("Token verification failed:", error);
//       return res.status(401).json({ message: "Not authorized, token failed" });
//     }
//   } else {
//     return res.status(401).json({ message: "No token, authorization denied" });
//   }
// };

// const admin = (req, res, next) => {
//   if (req.user && req.user.role === "admin") {
//     next();
//   } else {
//     res.status(403).json({ message: "Not authorized as admin" });
//   }
// };

// module.exports = { protect, admin };
