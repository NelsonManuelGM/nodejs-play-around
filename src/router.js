import { Router } from "express";

const router = Router();

const babysitters = [
  {
    id: 1,
    firstName: "Name1",
    lastName: "LastName1",
    age: 17,
    experiences: false,
  },
];

router.get("/babysitter", (req, res) => {
  res.status(200).json(babysitters);
});

router.get("/babysitter/:id", (req, res) => {
  const { id } = req.params;
  let data = babysitters.find((i) => i.id === +id);
  if (!data) {
    data = {};
  }
  res.status(200).json(data);
});

router.post("/babysitter/", (req, res) => {
  const data = req.body;
  if (data) {
    babysitters.push(data);
    return res.status(201).json(babysitters);
  }
  res.write("there was an error");
});

export default router;
