import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const [isBtnClicked, setIsBtnClikced] = useState(false);
  const [reviews] = useState([
    {
      clientPicture:
        "https://i.ibb.co/d7FPdp5/passport-size.png",
      reviewTitle: "Best Sports Training!",
      review:
        "I'm extremely satisfied with the training I received at the sports academy. The coaches are skilled and dedicated. Will definitely recommend to all sports enthusiasts!",
      clientName: "Shaikh Nayeem Uddin",
    },
    {
      clientPicture:
        "https://i.ibb.co/4TKxQd2/image.png",
      reviewTitle: "Transformative Experience",
      review:
        "Joining this sports academy was a game-changer for me. The facilities are top-notch, and the personalized guidance from the trainers helped me excel in my chosen sport.",
      clientName: "Mehedi Hasan",
    },
    {
      clientPicture:
        "https://i.ibb.co/grM1Vsr/image.png",
      reviewTitle: "Unparalleled Coaching",
      review:
        "I've trained at several academies, but none compare to this one. The coaches have a deep understanding of the game and focus on both skill and strategy.",
      clientName: "Habib Sheikh",
    },
    {
      clientPicture:
        "https://i.ibb.co/rs7tWyy/image.png",
      reviewTitle: "A Sports Haven",
      review:
        "From the moment I stepped in, I knew I was in the right place. The academy's positive atmosphere, combined with rigorous training, has helped me improve significantly.",
      clientName: "Shamim Ahmed",
    },
  ]);

  return (
    <section
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1531265726475-52ad60219627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFja2dyb3VuZCUyMGltYWdlJTIwJTIwc3BvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')",
      }}
      className="bg-black/90 bg-blend-multiply py-16"
    >
      <div className="max-w-screen-xl mx-auto">
        <p className="uppercase text-center text-sm">our testimonials</p>
        <h2 className="text-center text-2xl sm:text-4xl font-semibold px-10  mt-3">
          See what our satisfied customers <br className="hidden sm:flex" /> are
          saying about us
        </h2>
        <div className="grid md:grid-cols-2 gap-y-20 mt-20">
          {reviews.map((review, index) => (
            <div
              key={`review-user-${index}`}
              className="flex gap-10  px-10 group"
            >
              <img
                src={review.clientPicture}
                alt=""
                className="w-16 h-16  rounded-full mt-10 group-hover:border-4 group-hover:border-[#69bc5f] duration-300"
              />
              <div>
                <h3 className="text-2xl group-hover:text-[#69bc5f] duration-300">
                  {review.reviewTitle}
                </h3>
                <p className="my-6 font-mono ">{review.review}</p>
                <p className="text-[15px] font-semibold">
                  <span className="text-[#69bc5f]">{`${review.clientName}`}</span>
                  , Student
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setIsBtnClikced(true)}
            hidden={isBtnClicked}
            className="px-7 p-4 mt-10 font-bold bg-gradient-to-r from-[#61ba6d] via-[#83c331] to-[#61ba6d] hover:via-[#61ba6d] hover:to-[#83c331] hover:scale-95 duration-300"
          >
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
