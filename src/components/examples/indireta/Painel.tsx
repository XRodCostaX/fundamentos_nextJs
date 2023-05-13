import { useState } from 'react';
import Botoes from './Botoes';

const Painel = () => {
  const [nome, setNome] = useState('Inicial');

  function mudarValor(novo: string) {
    console.log(novo);
    setNome(novo);
  }

  return (
    <div className="flex flex-col gap-5 items-center">
      <h1 className="text-3xl">{nome}</h1>
      <Botoes mudarValor={mudarValor} />
    </div>
  );
};

export default Painel;
