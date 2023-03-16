const ApiError = require("../error/ApiError");
const fs = require("fs");
const { events } = require("../data.json");
class EventController {
  async create(req, res, next) {
    try {
      const { name, address, comment } = req.body;
      const date = new Date();
      const options = { year: "numeric", month: "long", day: "numeric" };
      console.log(name, address, comment);
      const newEvent = {
        id: parseInt(events.slice(-1)[0].id) + 1,
        name: name,
        address: address,
        date: date.toLocaleDateString("ru-RU", options).slice(0, -3),
        status: "Новый",
        comment: comment,
      };

      let parseddata = JSON.parse(fs.readFileSync("./data.json"));
      parseddata.events.push(newEvent);
      fs.writeFile(
        "./data.json",
        JSON.stringify(parseddata, null, 4),
        "utf8",
        (err) => {
          if (err) console.log(`Error writing file: ${err}`);
          else console.log(`File is written successfully!`);
        }
      );
      return res.json(newEvent);
    } catch (e) {
      next(ApiError.iternal("something wrong"));
    }
  }

  async getAll(req, res, next) {
    try{
    return res.json(events);
    }
    catch(e){
      next(ApiError.bagReguest(e))
    }
  }

  async deleteEvent(req,res,next){
    try{
    const { id } = req.query;
    console.log(id);
    let parseddata = JSON.parse(fs.readFileSync("./data.json"));
    parseddata.events = parseddata.events.filter(ev => ev.id!=id );
    fs.writeFile(
      "./data.json",
      JSON.stringify(parseddata, null, 4),
      "utf8",
      (err) => {
        if (err) console.log(`Error writing file: ${err}`);
        else console.log(`File is written successfully!`);
      }
    );
    return res.json('succefully');
    }
    catch(e){
      next(ApiError.iternal(e));
    }
  }

  async updateState(req, res) {
    
    const { id } = req.query;
    let parseddata = JSON.parse(fs.readFileSync("./data.json"));
    parseddata.events.filter((ev) => {
      if (ev.id == id) {
        ev.status = "Выполнен";
        return;
      }
    });
    fs.writeFile(
      "./data.json",
      JSON.stringify(parseddata, null, 4),
      "utf8",
      (err) => {
        if (err) console.log(`Error writing file: ${err}`);
        else console.log(`File is written successfully!`);
      }
    );
    return res.json(parseddata.events);
  }
}
module.exports = new EventController();
