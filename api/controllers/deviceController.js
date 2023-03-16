const ApiError = require("../error/ApiError");
class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      
     
      return res.json();
    } catch (e) {
      next(ApiError.bagReguest(e.message));
    }
  }
  async getAll(req, res) {}
  async getOne(req, res) {}
}
module.exports = new DeviceController();
