import express from "express";

const router = express.Router();

router.get("/login", (req, res) => {
  res.send("login route");
});
router.get("/signup", (req, res) => {
  res.send("signup rote");
});
router.get("/logout", (req, res) => {
  res.send("logout rote");
});

export default router;
