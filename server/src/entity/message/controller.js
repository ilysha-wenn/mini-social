const service = require('./service');

module.exports.GetAll = async(req, res)=>{
    try { const message = await service.GetAll();
          res.json(message);
        } catch (e) { res.status(500).json(e) }
}

module.exports.GetOne= async(req, res)=>{
    try { const message = await service.GetOne(req.params.id);
          res.json(message);
        } catch (e) { res.status(500).json(e.message) }
}

module.exports.Create = async(req, res)=>{
    try { const message = await service.Create(req.body, req.files.picture);
          res.json(message);
        } catch (e) { res.status(500).json(e.message) }
}

module.exports.Update = async(req, res)=>{
    try { const message = await service.Update(req.body);
          res.json(message);
        } catch (e) { res.status(500).json(e) }
}

module.exports.Delete = async(req, res) => {
    try { const message = await service.Delete(req.params.id);
          res.json('Deleted');
    } catch(e) { res.status(500).json(e.message)}
}