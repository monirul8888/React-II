import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark }) => {
  const { id, title, cover, author_img, author, hashtags } = blog;

  return (
    <div className="m-1">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="author flex justify-around items-center">
            <h3>{author}</h3>
            <img className="w-16" src={author_img} alt="" />
            <button onClick={() => handleBookMark(blog)}>
              <FaBookmark size={25} />
            </button>
          </div>

          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts{" "}
          </p>
          <div className="flex border-1">
            {hashtags.map((has, index) => (
              <p key={index}>#{has}</p>
            ))}
          </div>

          <div className="card-actions justify-end">
            <button className="btn badge badge-outline">Mark As Read</button>
            <button className="btn badge badge-outline">Bookmark</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

// {
//     "id": 2,
//     "cover": "https://i.ibb.co/6N2dgnZ/2.png",
//     "title": "JavaScript Objects for Absolute Beginners: A Fun Introduction",
//     "author_img": "https://i.ibb.co/7rFSJx5/girl1.jpg",
//     "author": "Sajal Ali",
//     "posted_date": "August 28, 2023",
//     "reading_time": 4,
//     "hashtags": [
//         "javascript",
//         "coding",
//         "dev"
//     ]
// }
