module.exports = {
    profile : (req, resp) =>{
        
        
        return resp.render('userProfile');
    },

    post : (req, resp) =>{
        resp.end(`<h1>Users Post Section </h1>`);
    }
}