// Get Homepage
exports.homepage = async(req, res)=>{
    const locals= {
        title:"NodeJs Node",
        description:"NodeJS Notes App",
    }

    res.render('index',{
        locals,
        layout:'../views/layouts/front-page'
    });
}


// Get About
exports.about = async(req, res)=>{
    const locals= {
        title:" About - NodeJs Node",
        description:"NodeJS Notes App",
    }

    res.render('about',locals);
}