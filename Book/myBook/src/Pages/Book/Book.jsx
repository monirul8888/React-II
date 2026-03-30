import React, { useState } from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookName, bookId, author, image, review, tags, category, rating } = book;

  const [seeMore, setSeeMore] = useState(false);

  const shortText = review.slice(0, 120);

  return (
    <Link to= {`/bookDetails/${bookId}`}>
      <div className="max-w-sm mx-auto">
        <div className="bg-white border rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
          {/* Image */}
          <div className="bg-gray-100 flex justify-center p-4">
            <img src={image} alt={bookName} className="h-60 object-contain" />
          </div>

          {/* Content */}
          <div className="p-5 space-y-3">
            <h2 className="text-xl font-semibold text-gray-800">{bookName}</h2>

            <p className="text-gray-600 text-sm">
              by <span className="font-medium">{author}</span>
            </p>

            {/* Review with See More */}
            <p className="text-gray-500 text-sm leading-relaxed">
              {seeMore ? review : shortText}
              {review.length > 120 && (
                <button
                  onClick={() => setSeeMore(!seeMore)}
                  className="ml-2 text-blue-600 font-medium hover:underline"
                >
                  {seeMore ? "See Less" : "...See More"}
                </button>
              )}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-200 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center pt-3 border-t">
              <span className="text-sm text-gray-500">{category}</span>
              <span className="text-sm font-semibold text-yellow-600">
                ⭐ {rating}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

// {
//     "bookId": 4,
//     "bookName": "The Catcher in the Rye",
//     "author": "J.D. Salinger",
//     "image": "https://i.ibb.co.com/tYSWRfG/catcherrye-edited-1-800x.png",
//     "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
//     "totalPages": 224,
//     "rating": 4.3,
//     "category": "Fiction",
//     "tags": [
//         "Young Adult",
//         "Identity"
//     ],
//     "publisher": "Little, Brown and Company",
//     "yearOfPublishing": 1951
// }
