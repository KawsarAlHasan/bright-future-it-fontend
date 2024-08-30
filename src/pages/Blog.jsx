import React from "react";
import BlogCard from "../components/BlogCard";
import { Helmet } from "react-helmet-async";

function Blog() {
  const blogs = [
    {
      category: "Software QA & Testing",
      image: "path/to/image1.jpg",
      title: "What To Do When There’s a Bug in Production & How to Handle...",
      description:
        "What To Do When There’s a Bug in Production & How to Handel Production Bugs...",
      author: "Fardin Amin Arpon",
      date: "Oct 02, 2023",
    },
    {
      category: "Programming Career",
      image: "path/to/image2.jpg",
      title: "Your Dream Developer Job Can Be Within Your Reach",
      description:
        "“Pleasure in the job puts perfection in work.” -Aristotle...",
      author: "Ahmad Tarique Hasan",
      date: "Aug 29, 2023",
    },
    {
      category: "Web Development",
      image: "path/to/image3.jpg",
      title: "fluter wev",
      description:
        "প্রোগ্রামিং হিরো জব প্লেসমেন্ট রিপোর্ট কার্ড: গত এক বছরে...",
      author: "Jhankar Mahbub",
      date: "Jun 10, 2023",
    },
  ];
  return (
    <div>
      <Helmet>
        <title>Blog - Bright Future IT</title>
        <meta
          name="description"
          content="Read the latest articles and updates from Bright Future IT on technology, education, and career advancement."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bright-futureit.com/blog" />
      </Helmet>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              Flutter IT Center
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Empowering developers with top-notch Flutter resources and
              training.
            </p>
          </div>

          <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold text-center mb-10">
              Recent Blogs
            </h1>
            <div className="flex flex-wrap justify-center">
              {blogs.map((blog, index) => (
                <BlogCard key={index} {...blog} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
