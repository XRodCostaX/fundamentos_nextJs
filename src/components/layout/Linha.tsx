export interface LinhaProps {
  children: any;
}

const Linha = (props: LinhaProps) => {
  return <div className="flex flex-wrap justify-center gap-20">{props.children}</div>;
};

export default Linha;
