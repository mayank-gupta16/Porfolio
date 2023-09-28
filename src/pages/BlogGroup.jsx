import * as React from "react";
import BlogCard from "../Components/BlogCard";
import AllBlogs from "../../Blogs/data.json";


export default function BlogGroup() {
  return (
    <>
      <div className="container brief-blog-box ">
        <div className="row">
          {
            AllBlogs.map((blog) => {
              return (
                <div className="col-sm-2 col-md-4 align-items-center brief-blog-section" key={blog.key}>
                  <BlogCard
                    Image={blog.Image}
                    DateTime={blog.DateTime}
                    Topic={blog.Topic}
                    Summary={blog.Summary}
                    Para={blog.Para}
                    uniqueIdentifier={blog.key}
                    Share={""}
                  />
                  
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
}
