import React from "react";

const BlogCard = ({ category, image, title, description, author, date }) => {
  return (
    <div className="card w-full md:w-1/3 bg-base-100 shadow-xl m-4">
      <figure className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <span className="badge badge-primary absolute top-2 left-2">
          {category}
        </span>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-between mt-4">
          <div className="text-sm text-gray-500">
            <p>{author}</p>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
