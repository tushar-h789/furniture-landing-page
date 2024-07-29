import Image from "next/image";

const NewArrivalCard = ({ arrival }) => {
  // console.log(arrival);
  return (
    <div>
      <div className="mb-28 items-center mx-auto relative">
        <Image
          src={arrival.image}
          alt="arrival"
          width={300}
          height={300}
          className="mx-auto "
        />
        <p className="bg-[#F56E07] inline-block p-2 rounded-md font-mochiy font-normal text-sm absolute top-3 left-7">Hot</p>
        <div className="mx-auto ml-11">
          <h4 className="font-poppins font-semibold text-base text-[#373737] mt-12 mb-2">
            {arrival.title}
          </h4>
          <div className="flex items-center gap-20">
            <p className="font-poppins font-semibold text-base text-[#373737]">
              {arrival.price}
            </p>
            {/* <div className="border-l-4"></div> */}
            <div className="flex items-center gap-2">
              <p className="font-poppins font-semibold text-base text-[#373737] ">
                {arrival.rating}
              </p>
              <p>{arrival.star}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalCard;
