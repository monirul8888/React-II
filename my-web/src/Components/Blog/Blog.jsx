import React from "react";

const Blog = ({ blog }) => {
  const { id, title, cover } = blog;
  console.log(blog);
  return (
    <div>
     
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={cover}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
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