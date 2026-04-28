import React from "react";
import CourseCard from "../components/CourseCard";
import "../styles/main.css";

const courses = [
  {
    title: "Introduction to Machine Learning",
    level: "Beginner",
    link: "https://cloud.google.com/learn"
  },
  {
    title: "Generative AI Fundamentals",
    level: "Intermediate",
    link: "https://cloud.google.com/learn"
  },
  {
    title: "ML on Google Cloud",
    level: "Advanced",
    link: "https://cloud.google.com/learn"
  }
];

function Home() {
  return (
    <div className="container">
      <header className="hero">
        <h1>🌐 Google ML Resources Hub</h1>
        <p>Learn Machine Learning & Generative AI in one place</p>
      </header>

      <section>
        <h2>📚 ML Courses</h2>
        <div className="grid">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </section>

      <section className="genai">
        <h2>🤖 Generative AI</h2>
        <p>
          Generative AI models can create text, images, and code using deep learning
          techniques like transformers and diffusion models.
        </p>
      </section>

      <footer>Made with ❤️ by Tanya Verma</footer>
    </div>
  );
}

export default Home;