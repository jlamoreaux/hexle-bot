require("dotenv").config();
import express, { Request, Response } from "express";
import http from "http";
import snoowrap from "./config/snoowrap";
import startScheduledTask from "./config/schedule";
import { generatePostBody, generatePostTitle } from "./utils/generatePost";

const app = express();

app.get("/keep-alive", (req: Request, res: Response) => {
  console.log(new Date().toLocaleString() + " -- Keep alive ping");
  res.sendStatus(200);
})

app.get("/auth-redirect", (req: Request, res: Response) => {
  console.log({ token: req.body });
  res.sendStatus(200);
})

app.set("port", process.env.PORT || 8080);
const port = app.get("port");

app.listen(port, () => {
  console.log("💻 App has started")
  console.log("🗓  Scheduling task...")
  startScheduledTask(postHexleThread);
  console.log("✅ Job has been scheduled. Now you wait.")
});

setInterval(() => {
  http.get(`http://${process.env.BASE_URL}/keep-alive`);
}, 280000)

const postHexleThread = () => {
  try {
    snoowrap.getSubreddit("wordle").submitSelfpost({subredditName: "wordle", title: generatePostTitle(), text: generatePostBody()})
  } catch (err) {
    console.log(err);
  }
}

export default app;