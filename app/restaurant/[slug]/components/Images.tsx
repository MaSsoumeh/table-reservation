import Image from "next/image";

type Props = {
  images: string[];
};
const Images = (props: Props) => {
  return (
    <div>
      <h1 className="font-bold text-xl mt-10 mb-7 border-b pb-5">
        {`${props.images.length} Photo${props.images.length > 1 ? "s" : ""}`}
      </h1>
      <div className="flex flex-wrap">
        {props.images.map((image) => (
          <div key={image} className="relative w-56 h-44 mr-1 mb-1">
            <Image fill src={image} alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
