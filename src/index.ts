import express from "express";
import ejs from "ejs";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.render("index", {
    name: "Dimitrije Ivanovic",
    title: "Portfolio",
    role: "Student Developer",
    bio: "Ik ben Dimitrije (Dimi), 22 jaar oud en studeer programmeren op AP Hogeschool in Antwerpen, mijn droom is om zo veel mogelijk te groeien als persoon.",
    pfp: "/pfp.jpg",
    skills: [
      "HTML/EJS",
      "CSS/Tailwind",
      "Typescript",
      "C#",
      "Docker",
      "Linux",
      "Cisco Packet Tracer",
    ],
    email: "dimitrijeivanovic24@gmail.com",
    socials: {
      github: "https://github.com/DimitrijeIvanovic",
      linkedin: "https://www.linkedin.com/in/dimitrije-ivanovic-b94139356/",
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});
