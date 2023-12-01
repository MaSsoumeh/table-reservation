type Props = {
  name: string;
};
const Title = (props: Props) => {
  return (
    <div className="mt-4 border-b pb-6">
      <h1 className="font-bold text-2xl">{props.name}</h1>
    </div>
  );
};

export default Title;
