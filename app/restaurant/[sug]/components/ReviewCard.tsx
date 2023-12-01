const ReviewCard = () => {
  return (
    <div className="border-b pb-7 mb-7">
      <div className="flex">
        <div className="w-1/6 flex flex-col items-center">
          <div className="rounded-full bg-gray w-16 h-16 flex items-center justify-center">
            <h2 className="text-primary text-lg">MJ</h2>
          </div>
          <p className="text-center">Micheal Jordan</p>
        </div>
        <div className="ml-10 w-5/6">
          <div className="flex items-center">
            <div className="flex mr-5">*****</div>
          </div>
          <div className="mt-5">
            <p className="text-reg font-light">
              Laurie was on top of everything! Slow night due to the snow storm
              so it worked in our favor to have more one on one with the staff.
              Delicious and well worth the money.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;