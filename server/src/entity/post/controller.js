const service = require('./service');

module.exports.GetAll = async(req, res)=>{
    try { const posts = await service.GetAll();
          res.json(posts);
        } catch (e) { res.status(500).json(e) }
}

module.exports.GetOne= async(req, res)=>{
    try { const post = await service.GetOne(req.params.id);
          res.json(post);
        } catch (e) { res.status(500).json(e.message) }
}

module.exports.Create = async(req, res)=>{
    try { const post = await service.Create(req.body, req.files.picture);
          res.json(post);
        } catch (e) { res.status(500).json(e.message) }
}

module.exports.Update = async(req, res)=>{
    try { const post = await service.Update(req.body);
          res.json(post);
        } catch (e) { res.status(500).json(e) }
}