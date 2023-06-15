const router = require("express").Router();

const RoadMap = require("../models/RoadMap");

//criação de dados
router.post("/", async (req, res) => {
  const {
    title,
    description,
    person,
    sponsor,
    start,
    end,
    dataImage,
    guide,
    isFree,
  } = req.body;

  if (!title) {
    res.status(422).json({ error: "Título é obrigatório" });
    return;
  }

  const roadmap = {
    title,
    description,
    person,
    sponsor,
    start,
    end,
    dataImage,
    guide,
    isFree,
    comments: [],
  };

  try {
    await RoadMap.create(roadmap);

    res.status(201).json({ message: "Roteiro adicionado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.post("/:id/comment", async (req, res) => {
  const id = req.params.id

  const {
    userId,
    userName,
    content,
    date
  } = req.body;

  try {
    const roadmap = await RoadMap.findOne({ _id: id });

    if (!roadmap) {
      res.status(422).json({ message: "Roteiro não encontrado" });
      return;
    } else {
      const newComment = {
        userId,
        userName,
        content,
        date
      }

      const newRoadMap = {
        ...roadmap._doc,
        comments: roadmap.comments ? [...roadmap._doc.comments, newComment] : [newComment]
      }

      console.log(newRoadMap)

      const updatedRoadMap = await RoadMap.updateOne({ _id: id }, newRoadMap);
      res.status(200).json(updatedRoadMap);
    }
  } catch (error) {
    res.status(500).json({ error: error })
  }
})

//leitura de dados
router.get("/", async (req, res) => {
  try {
    const roadmaps = await RoadMap.find();

    res.status(200).json(roadmaps);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const roadmap = await RoadMap.findOne({ _id: id });

    if (!roadmap) {
      res.status(422).json({ message: "Roteiro não encontrado" });
      return;
    }

    res.status(200).json(roadmap);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  const {
    title,
    description,
    limitPerson,
    sponsor,
    dataStart,
    dataEnd,
    dataImage,
    guide,
    isFree,
  } = req.body;

  const roadmap = {
    title,
    description,
    limitPerson,
    sponsor,
    dataStart,
    dataEnd,
    dataImage,
    guide,
    isFree,
  };

  try {
    const updatedRoadMap = await RoadMap.updateOne({ _id: id }, roadmap);

    if (updatedRoadMap.matchedCount === 0) {
      res.status(422).json({ message: "Roteiro não encontrado" });
      return;
    }

    res.status(200).json(roadmap);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const roadmap = await RoadMap.findOne({ _id: id });

  if (!roadmap) {
    res.status(422).json({ message: "Roteiro não encontrado" });
    return;
  }

  try {
    await RoadMap.deleteOne({ _id: id });

    res.status(200).json({ message: "Roteiro removido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
