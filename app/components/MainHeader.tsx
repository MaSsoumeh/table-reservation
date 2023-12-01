type Props = {
  children: React.ReactNode;
};

const MainHeader = (props: Props) => {
  return (
    <div className="h-60 bg-gradient-to-r from-primary to-gray p-2">
      <div className="text-center mt-10">{props.children}</div>
    </div>
  );
};

export default MainHeader;
