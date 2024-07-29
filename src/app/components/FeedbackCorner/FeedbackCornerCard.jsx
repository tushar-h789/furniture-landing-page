const FeedbackCornerCard = ({name, feedback}) => {
  return (
    <div>
      <div className="w-[434px] h-[315px] bg-[#E9F4EE] shadow-xl py-5 px-4 mb-20">
        <p className="font-bold text-7xl text-black">“</p>
        <h4 className="font-poppins font-semibold text-xl text-black">Emily Wilson</h4>
        <p className="text-[#6F6F6F] font-poppins font-medium text-base">
          The customer experience was exceptional from start to finish. The
          website is user-friendly, the checkout process was smooth, and the
          clothes I ordered fit perfectly. I am beyond satisfied!
        </p>
      </div>
    </div>
  );
};

export default FeedbackCornerCard;
