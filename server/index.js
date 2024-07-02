const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");
const Jardin = require('./models/Jardin');
const Lectura = require('./models/Reading');
const Membresia = require('./models/Membresia');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://0322103739:dimension4700@cluster0.y77lo0a.mongodb.net/garden", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Registro de usuario
app.post("/register", (req, res) => {
    UserModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(400).json({ error: err.message }));
});

// Login de usuario
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    UserModel.findOne({ username, password })
        .then(user => {
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ message: "Usuario no encontrado" });
            }
        })
        .catch(err => res.status(500).json({ error: err.message }));
});

// CRUD de Jardines
app.post("/jardines", (req, res) => {
    const nuevoJardin = req.body;
    Jardin.create(nuevoJardin)
        .then(jardin => res.json(jardin))
        .catch(err => res.status(400).json({ error: err.message }));
});

app.get("/jardines", (req, res) => {
    Jardin.find()
        .then(jardines => res.json(jardines))
        .catch(err => res.status(400).json({ error: err.message }));
});

app.get("/jardines/:id", (req, res) => {
    const { id } = req.params;
    Jardin.findById(id)
        .then(jardin => {
            if (jardin) {
                res.json(jardin);
            } else {
                res.status(404).json({ message: "Jardín no encontrado" });
            }
        })
        .catch(err => res.status(400).json({ error: err.message }));
});

app.put("/jardines/:id", (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    Jardin.findByIdAndUpdate(id, datosActualizados, { new: true, runValidators: true })
        .then(jardin => {
            if (jardin) {
                res.json(jardin);
            } else {
                res.status(404).json({ message: "Jardín no encontrado" });
            }
        })
        .catch(err => res.status(400).json({ error: err.message }));
});

app.delete("/jardines/:id", (req, res) => {
    const { id } = req.params;
    Jardin.findByIdAndDelete(id)
        .then(jardin => {
            if (jardin) {
                res.json({ message: "Jardín eliminado correctamente" });
            } else {
                res.status(404).json({ message: "Jardín no encontrado" });
            }
        })
        .catch(err => res.status(400).json({ error: err.message }));
});

// CRUD de Lecturas
app.post("/lecturas", (req, res) => {
    const nuevaLectura = req.body;
    Lectura.create(nuevaLectura)
        .then(lectura => res.json(lectura))
        .catch(err => res.status(400).json({ error: err.message }));
});

app.get("/lecturas", (req, res) => {
    Lectura.find()
        .then(lecturas => res.json(lecturas))
        .catch(err => res.status(400).json({ error: err.message }));
});

app.get("/lecturas/:id", (req, res) => {
    const { id } = req.params;
    Lectura.findById(id)
        .then(lectura => {
            if (lectura) {
                res.json(lectura);
            } else {
                res.status(404).json({ message: "Lectura no encontrada" });
            }
        })
        .catch(err => res.status(400).json({ error: err.message }));
});

app.put("/lecturas/:id", (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    Lectura.findByIdAndUpdate(id, datosActualizados, { new: true, runValidators: true })
        .then(lectura => {
            if (lectura) {
                res.json(lectura);
            } else {
                res.status(404).json({ message: "Lectura no encontrada" });
            }
        })
        .catch(err => res.status(400).json({ error: err.message }));
});

app.delete("/lecturas/:id", (req, res) => {
    const { id } = req.params;
    Lectura.findByIdAndDelete(id)
        .then(lectura => {
            if (lectura) {
                res.json({ message: "Lectura eliminada correctamente" });
            } else {
                res.status(404).json({ message: "Lectura no encontrada" });
            }
        })
        .catch(err => res.status(400).json({ error: err.message }));
});

app.get("/membresias", async (req, res) => {
    try {
        const membresias = await Membresia.find(); // Consulta todas las membresías en la base de datos
        res.json(membresias); // Devuelve las membresías como respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ error: error.message }); // Manejo de errores si la consulta falla
    }
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
