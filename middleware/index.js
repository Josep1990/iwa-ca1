const middlewareObj = {};
   //   Movies         = require("./../models/movie");

//======================================================================================



middlewareObj.isLoggedin = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "Please, Login");
    res.redirect("/login");
}



module.exports = middlewareObj;