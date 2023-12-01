import MainHeader from "@/app/components/MainHeader";

type Props = {
  slug: string;
};
const Header = (props: Props) => {
  const renderTitle = () => {
    const slugArray = props.slug.split("-");
    slugArray[slugArray.length - 1] = `(${slugArray[slugArray.length - 1]})`;
    return slugArray.join(" ");
  };

  return (
    <MainHeader>
      <h1 className="text-5xl text-white capitalize text-shadow text-center">
        {renderTitle()}
      </h1>
    </MainHeader>
  );
};

export default Header;
