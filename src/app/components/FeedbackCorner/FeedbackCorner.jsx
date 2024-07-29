import FeedbackCornerCard from "./FeedbackCornerCard";

const FeedbackCorner = () => {
  return (
    <>
      <div className="my-[160px]">
        <h2 className="font-mochiy font-normal text-3xl text-center">
          Feedback Corner
        </h2>
      </div>
      <div className="flex items-center gap-10 justify-center">
        <FeedbackCornerCard
          name="Emily Wilson"
          feedback="The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!"
        />
        <FeedbackCornerCard
          name="Sarah Thompson"
          feedback="The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!"
        />
        <FeedbackCornerCard
          name="Olivia Martinez"
          feedback="The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!"
        />
      </div>
    </>
  );
};

export default FeedbackCorner;
