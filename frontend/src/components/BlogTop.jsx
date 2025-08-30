import React from "react";
import { Link } from "react-router-dom";
import blogtop1 from "../assets/blogtop1.jpeg";
import blogtop2 from "../assets/blogtop2.png";
import blogtop3 from "../assets/blogtop3.png";
import blogtop4 from "../assets/blogtop4.jpeg";
import blogtop5 from "../assets/blogtop5.jpeg";
import blogtop6 from "../assets/blogtop4.jpeg";
import blogtop7 from "../assets/blogtop4.jpeg";

const Logo = () => (
  <div className="w-16 h-16 rounded-xl bg-yellow-400 flex items-center justify-center shadow-md">
    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
      <div className="w-2 h-4 bg-yellow-400 rounded-full rotate-45"></div>
    </div>
  </div>
);

export default function BlogTop() {
  const categories = [
    { name: "Deep End", link: "/deep-end" },
    { name: "Healthy Habits", link: "/healthy-habits" },
    { name: "Relationships", link: "/relationships" },
    { name: "Sleep", link: "/sleep" },
    { name: "Anxiety", link: "/anxiety" },
    { name: "Meditation 101", link: "/meditation-101" },
  ];

  const popularPosts = [
    {
      title: "It’s Not About the Cookie",
      author: "Yael Shy",
      date: "June 1, 2025",
      img: blogtop2,
    },
    {
      title: "Embracing Ambition",
      author: "Yael Shy",
      date: "May 25, 2025",
      img: blogtop3,
    },
    {
      title: "I Feel Afraid All The Time",
      author: "Yael Shy",
      date: "May 18, 2025",
      img: blogtop4,
    },
  ];

  const latestPosts = [
    {
      title: "Responding to Life, Instead of Reacting to It",
      author: "Stephen Batchelor",
      date: "August 31, 2025",
      img: blogtop5,
      tag: null,
    },
    {
      title: "Compassion is Where Pain Meets Love",
      author: "Susan Piver",
      date: "August 24, 2025",
      img: blogtop1,
      tag: null,
    },
    {
      title: "Mindfulness and Neurodiversity",
      author: "Tim Hwang",
      date: "August 17, 2025",
      img: blogtop2,
      tag: "Meditation 101",
    },
    {
      title: "Opening Up Wisely",
      author: "Oren Jay Sofer",
      date: "August 10, 2025",
      img: blogtop3,
    },
    {
      title: "Embracing the Suck",
      author: "Daron Larson",
      date: "August 3, 2025",
      img: blogtop7,
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <div className="gradient-texture relative w-full min-h-[110vh] flex flex-col items-center justify-start text-center px-6 text-white">
        <div className="mb-6 mt-12 relative z-10">
          <h1 className="text-6xl font-medium leading-tight tracking-tight">
            Happier Meditation
          </h1>
          <h1 className="text-6xl font-medium leading-tight tracking-tight mt-2">
            Weekly
          </h1>
        </div>

        <p className="max-w-2xl mx-auto text-lg font-medium leading-relaxed mb-10 relative z-10 opacity-90">
          Here, we're all about making the insights of the world's most
          inspiring teachers accessible and helping you find mindful joy every
          day.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10 relative z-10">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to={cat.link}
              className="px-5 py-2 border border-white rounded-full text-sm font-semibold transition"
            >
              {cat.name.toUpperCase()}
            </Link>
          ))}
        </div>

        <hr className="border-t border-white/60 w-3/4 mx-auto relative z-10 mb-16" />

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10 text-left">
          <div className="flex justify-center">
            <img
              src={blogtop1}
              alt="Compassion"
              className="rounded-xl shadow-lg object-cover w-[400px] h-[400px]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-semibold leading-snug mb-4">
              Compassion is Where <br /> Pain Meets Love
            </h1>
            <p className="text-lg mb-6 leading-relaxed opacity-90">
              Compassion is the art of holding pain and love in your heart at
              once. It's not about grand gestures; it's about what's needed in
              the moment. True compassion requires courage—letting your heart
              break open to the world's sorrow and beauty, and responding with
              fierce kindness.
            </p>
            <p className="text-sm opacity-80">Susan Piver • August 24, 2025</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-2">Most popular</h2>
        <hr className="border-t border-black mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {popularPosts.map((post, idx) => (
            <div key={idx} className="flex flex-col">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-medium mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600">
                {post.author} • {post.date}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[150rem] mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-2">The latest</h2>
        <hr className="border-t border-black mb-10" />

        <div className="flex flex-col space-y-10">
          {latestPosts.map((post, idx) => (
            <div key={idx}>
              {idx === 5 ? (
                <div className="flex flex-col">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-[400px] object-cover rounded-2xl mb-6"
                  />
                  {post.tag && (
                    <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold border rounded-full text-gray-700 border-gray-400">
                      {post.tag.toUpperCase()}
                    </span>
                  )}
                  <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-600">
                    {post.author} • {post.date}
                  </p>
                </div>
              ) : (
                <div className="flex items-center space-x-6">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-24 h-24 object-cover rounded-2xl"
                  />
                  <div>
                    {post.tag && (
                      <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold border rounded-full text-gray-700 border-gray-400">
                        {post.tag.toUpperCase()}
                      </span>
                    )}
                    <h3 className="text-xl font-medium mb-1">{post.title}</h3>
                    <p className="text-sm text-gray-600">
                      {post.author} • {post.date}
                    </p>
                  </div>
                </div>
              )}
              <hr className="border-t border-black mt-8" />
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative w-full h-[70vh] flex flex-col items-center justify-center px-6 text-center"
        style={{
          background: "linear-gradient(to bottom, #fffceb, #fdd835, #e65100)",
        }}
      >
        <button className="absolute top-10 px-6 py-2 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
          Read more
        </button>

        <div className="flex flex-col items-start mt-20 max-w-3xl text-left">
          <Logo />
          <h1 className="mt-8 text-5xl md:text-6xl font-semibold leading-snug text-yellow-100">
            Do what it actually <br />
            takes to be happier.
          </h1>
        </div>

        <div className="absolute bottom-16 right-32">
          <button className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition">
            Try for free
          </button>
        </div>
      </div>
    </div>
  );
}
