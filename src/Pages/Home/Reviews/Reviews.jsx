import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const [reviews] = useState([
    {
      id: 1,
      name: "John Doe",
      review: "The sports camp exceeded my expectations. The coaches were knowledgeable and supportive. I had a fantastic experience!",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      review: "I highly recommend this summer camp. The variety of sports activities offered is impressive. My child had a great time and made new friends.",
      rating: 4,
    },
    {
      id: 3,
      name: "Mike Johnson",
      review: "The coaches at this camp are outstanding. They provide individual attention and helped me improve my skills. I can't wait to come back next summer!",
      rating: 4.5,
    },
  ]);

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">User Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-2xl text-yellow-500 mr-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar key={index} className={index < review.rating ? "text-yellow-500" : "text-gray-300"} />
                  ))}
                </div>
                <span className="text-gray-600">{review.rating}</span>
              </div>
              <p className="text-gray-700 mb-4">{review.review}</p>
              <p className="text-gray-800 font-semibold">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
