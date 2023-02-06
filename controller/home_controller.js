module.exports.home = (req, resp) =>{
    
    return resp.render('home', {title : "Home"});
}