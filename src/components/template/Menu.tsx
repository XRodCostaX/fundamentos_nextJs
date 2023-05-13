const Menu = (props: any) => {
  return (
    <div
      className={`
    flex flex-col gap-20
    `}>
      {props.children}
    </div>
  );
};

export default Menu;
