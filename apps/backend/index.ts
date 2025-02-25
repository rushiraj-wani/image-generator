import express from "express";
import {
  TrainModel,
  GenerateImage,
  PackGeneratedImages,
} from "../../packages/common/types";

const app = express();
const PORT = process.env.PORT || 3000;

// to train model
app.post("/ai/training", (req, res) => {});

// to generate model
app.post("/ai/generate", (req, res) => {});

// to generate a new pack images
app.post("/pack/generate", (req, res) => {});

// get packs
app.get("/pack/bulk", (req, res) => {});

// to get a specific image
app.get("/image", (req, res) => {});

app.get("/", (req, res) => {
  res.send(`Hello world`);
});

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
