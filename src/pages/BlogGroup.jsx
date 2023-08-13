import * as React from "react";
import BlogCard from "../Components/BlogCard";

export default function BlogGroup() {
  return (
    <>
      <div className="container brief-blog-box ">
        <div className="row">
          <div className="col-sm-2 col-md-4 align-items-center brief-blog-section">
            <BlogCard
              Content={`Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`}
              Topic={"Sample"}
            />
          </div>
          <div className="col-sm-2 col-md-4 align-items-center brief-blog-section">
            <BlogCard
              Content={`Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`}
              Topic={"Sample"}
            />
          </div>
          <div className="col-sm-2 col-md-4 align-items-center brief-blog-section">
            <BlogCard
              Content={`Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`}
              Topic={"Sample"}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2 col-md-4 align-items-center brief-blog-section">
            <BlogCard
              Content={`Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`}
              Topic={"Sample"}
            />
          </div>
          <div className="col-sm-2 col-md-4 align-items-center brief-blog-section">
            <BlogCard
              Content={`Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`}
              Topic={"Sample"}
            />
          </div>
          <div className="col-sm-2 col-md-4 align-items-center brief-blog-section">
            <BlogCard
              Content={`Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`}
              Topic={"Sample"}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-2 col-md-4 align-items-center brief-blog-section">
            <BlogCard
              Content={`Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`}
              Topic={"Sample"}
            />
          </div>
          <div className="col-sm-2 col-md-4 align-items-center brief-blog-section">
            <BlogCard
              Content={`Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`}
              Topic={"Sample"}
            />
          </div>
          <div className="col-sm-2 col-md-4 align-items-center brief-blog-section">
            <BlogCard
              Content={`Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica`}
              Topic={"Sample"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
