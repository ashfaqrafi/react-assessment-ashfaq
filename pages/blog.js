import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";
import { data } from "autoprefixer";

const Blog = (props) => {
  const [blogs, setblogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2);
  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`);
    setCount(count + 2);
    let data = await d.json();
    setblogs(data);
  };
  return (
    <div className="main-body">
      <InfiniteScroll
        className="infine-scroller"
        dataLength={blogs.length} 
        next={fetchData}
        hasMore={props.allCount !== blogs.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p className="text-center primary-paragraph">
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {blogs.map((blogitem) => {
          return (
            <div key={blogitem.slug} className="mb-[30px] inter card">
              <div className="space-y-[20px]">
                <div className="blogItem ">
                  <h3 className="section-heading">{blogitem.Title}</h3>
                  <p className="primary-paragraph text-justify">
                    {blogitem.metadesc.substr(0, 140)} ...
                  </p>
                </div>
                <Link to={`/blogpost/${blogitem.slug}`}>
                  <button className="primary-button mt-[20px]">
                    read more
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let allCount = data.length;
  let myfile;
  let allBlogs = [];

  for (let index = 0; index < 2; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }
  return {
    props: { allBlogs, allCount }, 
  };
}

export default Blog;
