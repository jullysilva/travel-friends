const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());

require("dotenv").config();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const roadMapRoutes = require("./routes/roadMapRoutes");
const User = require("./models/User");

app.use("/roadmap", roadMapRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Api Funcionando" });
});

app.get("/user/:id", checkToken, async (req, res) => {
  const id = req.params.id;

  const user = await User.findById(id, "-password");

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  res.status(200).json({ user });
});

function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Acesso negado!" });
  }

  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret);

    next();
  } catch (error) {
    return res.status(400).json({ message: "Token inválido!" });
  }
}

app.post("/auth/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name) {
    return res.status(422).json({ error: "Por favor, insira seu nome!" });
  }
  if (!email) {
    return res.status(422).json({ error: "Por favor, insira seu email!" });
  }
  if (!password) {
    return res.status(422).json({ error: "Por favor, insira sua senha!" });
  }

  const userExists = await User.findOne({ email: email });

  if (userExists) {
    return res.status(422).json({ error: "Este email já está cadastrado!" });
  }

  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  const user = new User({
    name,
    email,
    password: passwordHash,
  });

  try {
    await user.save();

    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: error });
  }
});

app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(422).json({ error: "Por favor, insira seu email!" });
  }

  if (!password) {
    return res.status(422).json({ error: "Por favor, insira sua senha!" });
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(422).json({ error: "Usuário não encontrado!" });
  }

  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.status(422).json({ error: "Senha incorreta!" });
  }

  try {
    const secret = process.env.SECRET;

    const token = jwt.sign(
      {
        id: user._id,
      },
      secret
    );

    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    res
      .status(200)
      .json({ message: "Autentificação realizada com sucesso!", token, userData });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: error });
  }
});

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@apicluster.1nigmuz.mongodb.net/?retryWrites=true&w=majority`
  )

  .then(() => {
    console.log("Conectado ao banco de dados");
    app.listen(8000);
  })

  .catch((err) => console.log(err));
