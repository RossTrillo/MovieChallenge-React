import React from 'react';
import { render } from '@testing-library/react';
import { ContainerCards } from '../src/components/ContainerCards';

// Mockear la función fetch
global.fetch = jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue({
    // Simula la respuesta de la API con las películas
    results: [
      { id: 1, title: 'Movie 1' },
      { id: 2, title: 'Movie 2' },
      { id: 3, title: 'Movie 3' },
      { id: 4, title: 'Movie 4' }
    ]
  })
});

describe('ContainerCards component', () => {
  it('debería renderizar 4 películas correctamente', async () => {
    const currentPage = 1;
    const sortBy = 'popularity.desc';
    const filterBy = '28';

    // Renderiza el componente
    const { findAllByTestId } = render(
      <ContainerCards currentPage={currentPage} sortBy={sortBy} filterBy={filterBy} />
    );

    // Encuentra todos los elementos <li> usando el atributo de prueba 'data-testid'
    const movieItems = await findAllByTestId('movie-item');

    // Verifica que haya 4 elementos <li> renderizados
    expect(movieItems).toHaveLength(4);
  });

});
