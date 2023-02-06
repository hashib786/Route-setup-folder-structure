module.exports = {
    profile : (req, resp) =>{
        resp.end(`<h1>Users Profile Section </h1>`);
    },

    post : (req, resp) =>{
        resp.end(`<h1>Users Post Section </h1>`);
    }
}