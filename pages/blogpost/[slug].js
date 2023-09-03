import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import * as fs from "fs";

const Slug = (props) => {
  function createMarkup(c) {
    return {__html: c};
  }
  const [blog, setblog] = useState(props.myBlog);
  

  return (
    <div className="main-body roboto">
      <div className="card ">
        <div className="space-y-[20px] p-[10px]" >
          <div className="primary-heading">{blog && blog.Title}</div>
          <hr />
          <div className="primary-pargraph space-y-[10px] text-justify">
            {" "}
            <div className="section-heading">Content :</div> <br />{" "}
            { blog && <div dangerouslySetInnerHTML={createMarkup(blog.Content)} />}
          </div>
          <div className="primary-pargraph">
            <span className="section-heading">Author :</span>{" "}
            <span className="italic font-bold text-purple-900">
              {blog && blog.Author}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export async function getStaticPaths() {
  let allB = await fs.promises.readdir(`blogdata`);
  allB = allB.map((item)=>{
    return { params: { slug: item.split(".")[0]} }
  })
  return {
    paths: allB,
    fallback: true, // can also be true or 'blocking'
  };
}
export async function getStaticProps(context) {

  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`,"utf-8");

  return {
    props: { myBlog : JSON.parse(myBlog) }, // will be passed to the page component as props
  };
}

export default Slug;
