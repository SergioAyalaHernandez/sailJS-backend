/**
 * CarsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  async create(req, res) {
    try {
      let params = req.allParams();
      let params2 = req.body;
      console.log(params);
      const car = await Cars.create({
        name: params.name,
        brand: params.brand,
        year: params.year,
        description: params.description,
        payDay: params.payDay,
        link: params.link,
      });
      console.log(car);
      return res.ok(car);
    } catch (err) {
      return res.serverError(err);
    }
  }

};

