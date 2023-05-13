export interface FilhoProps {
  nome: string;
  sobrenome: string;
}

const Filho = (props: FilhoProps) => {
  return (
    <li>
      {props.nome} {props.sobrenome}
    </li>
  );
};

export default Filho;
