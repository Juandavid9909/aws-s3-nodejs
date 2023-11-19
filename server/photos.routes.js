const { Router } = require("express");
const { readFile, uploadFile } = require("./s3");

const router = Router();

router.get("/", (req, res) => res.send("Welcome to server"));

router.post("/upload", async(req, res) => {
    console.log(req.files['photo'].tempFilePath);

    const result = await uploadFile(req.files['photo']);

    console.log(result);

    res.send("Archivo subido");
});

router.get("/archivo/:fileName", async(req, res) => {
    try {
        const result = await readFile(req.params.fileName);

        res.send("Archivo descargado");
    } catch (error) {
        res.send(error.message);
    }
});

module.exports = router;