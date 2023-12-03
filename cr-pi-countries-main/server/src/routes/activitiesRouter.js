const { Router } = require("express");

const activitiesRouter = Router();

activitiesRouter.post("/", (req, res) => {
  res.send(
    "Estoy en la ruta /activities, la cual recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados. "
  );
});

activitiesRouter.get("/", (req, res) => {
  res.send(
    "Estoy en la ruta /activities, la cual obtiene un arreglo de objetos, donde cada objeto es una actividad turística."
  );
});

module.exports = activitiesRouter;
