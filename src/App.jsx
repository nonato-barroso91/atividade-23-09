import React from 'react';
import Jogos from './Componentes/Jogos';
import LoginForm from './Componentes/LoginForm';
import ImageComponent from './Componentes/ImageComponent';
import CheckboxComponent from './Componentes/CheckboxComponent';
import Mensagem from './Componentes/Mensagem';

const App = () => {
  return (
    <div>
      <h1>Meus Componentes</h1>
      <Jogos /> 
      <LoginForm /> 
      <ImageComponent />
      <CheckboxComponent />
      <Mensagem nome="nonato"/>
    </div>
  );
};

export default App;