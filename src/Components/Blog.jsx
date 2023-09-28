import React from "react";
import data from "../../Blogs/data.json";

export default function () {
  const pageURL = window.location.href;
  const pageName = pageURL.substring(pageURL.lastIndexOf("/") + 1);
  const blog = data.find((blog) => blog.key == pageName);

  return (
    <div>
      <div className="container">
        <div className="row mt-5 mb-5 d-flex justify-content-center">
          <div className="col-md-8 mt-5 align-self-center d-flex justify-content-center">
            <h1 className="mt-5 mb-5 align-self-center fw-bolder">
              {blog.Topic}
            </h1>
          </div>
        </div>

        <div className="row mt-5 mb-5 d-flex justify-content-center">
          {blog.Image && (
            <div className="mb-5 col-md-8 align-self-center">
              <img src={blog.Image} alt="" className="mb-5 img-fluid" />
            </div>
          )}
        </div>

        <div className="row mt-5 mb-5 d-flex justify-content-center">
          {blog.Para.map((paragraph, index) => {
            return (
              <div className="col-md-8 mb-5 align-self-center d-flex justify-content-center" key={index}>
                <p className="mb-5 fs-5 align-self-center">
                  {paragraph}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
