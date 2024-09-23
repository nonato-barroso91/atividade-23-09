import React from 'react';

const Jogos = () => {
  const games = [
    {
      name: 'Red Dead Redemption 2',
      platform: 'PlayStation 4',
      year: 2018,
    },
    { name: 'God of War Ragnarök',
     platform: 'PlayStation 4',
     year: 2022 
    },
    {
      name: 'Red Dead Redemption 2',
      platform: 'PlayStation 4, Xbox One',
      year: 2018,
    },
    {
      name: 'Gran Turismo 7',
      platform: 'PlayStation 4',
      year: 2022,
    },
  ];

  return (
    <table border={1} align="center">
      <thead>
        <tr>
          <th>Nome do Jogo</th>
          <th>Plataforma</th>
          <th>Ano de Lançamento</th>
        </tr>
      </thead>
      <tbody>
        {games.map((game, index) => (
          <tr key={index}>
            <td>{game.name}</td>
            <td>{game.platform}</td>
            <td>{game.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Jogos;