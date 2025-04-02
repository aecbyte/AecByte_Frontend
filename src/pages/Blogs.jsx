import React, { useState, useEffect } from 'react';
import CardComponent from '../components/CardComponent';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
      fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/@satyanshsinghv/feed")
        .then((response) => response.json())
        .then((data) => setBlogs(data.items.slice(0, 4))); // Get latest 5 posts

        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@priteshparida733")
        .then((response) => response.json())
        .then((data) => setArticles(data.items.slice(0, 7))); // Get latest 5 posts
    }, []);


  return (
<div className="mb-10 font-['JURA'] ">

        <div className="h-40 flex flex-col items-center justify-center text-center">
  <div className="absolute left-0 right-0 text-6xl sm:text-6xl md:text-6xl lg:text-8xl font-['karantina'] strokeme -z-10 tracking-[0.3em] sm:tracking-[0.5em] md:tracking-[0.7em] indent-[0.3em] sm:indent-[0.5em] md:indent-[0.7em]">
    BLOGS
  </div>
  <div className="font-['JURA'] text-md sm:text-xl md:text-2xl lg:text-4xl font-bold bg-gradient-to-r from-[#DC3545] to-[#FD7E14] inline-block text-transparent bg-clip-text tracking-[.05em] sm:tracking-[.1em]">
    BLOGS
  </div>
</div>

<section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-12 justify-around px-5 py-0 mx-auto my-0 max-w-[1440px] max-md:flex-wrap max-md:gap-8 max-sm:flex-col max-sm:gap-5">
        {blogs.map((blog, index) => (
          <CardComponent
            key={index}
            image={blog.description}
            // altText={card.altText}
            title={blog.title}
            date={blog.pubDate}
            link={blog.link}
            // description={card.description}
          />
        ))}
      </section>
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-12 justify-around px-5 py-0 mx-auto my-0 max-w-[1440px] max-md:flex-wrap max-md:gap-8 max-sm:flex-col max-sm:gap-5">
        {articles.map((blog, index) => (
          <CardComponent
            key={index}
            image={blog.description}
            // altText={card.altText}
            title={blog.title}
            date={blog.pubDate}
            link={blog.link}
            // description={card.description}
          />
        ))}
      </section>
    </div>
  )
}

export default Blogs;