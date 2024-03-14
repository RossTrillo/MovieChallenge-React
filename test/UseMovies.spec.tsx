import { act } from 'react-dom/test-utils'; // Importa act
import { renderHook } from '@testing-library/react-hooks'; // Importa renderHook
import { UseMovies } from '../src/hooks/UseMovies';

describe('UseMovies hook', () => {
  it('debería llamar a la API con los datos adecuados', async () => {
    // Mockear fetch globalmente
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValueOnce({
        results: [], // Puedes ajustar esto según tus necesidades de prueba
        total_pages: 1, // Puedes ajustar esto según tus necesidades de prueba
      }),
    });

    // Llamar al hook dentro de una función asincrónica utilizando renderHook
    await act(async () => {
      const { result, waitForNextUpdate } = renderHook(() => UseMovies(1, "popularity.desc", "28"));

      // Esperar a que el hook haya realizado la llamada a la API
      await waitForNextUpdate();

      // Verificar que fetch haya sido llamado con la URL correcta
      expect(global.fetch).toHaveBeenCalledWith(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28`,
        expect.any(Object)
      );

      // Verificar que el hook devuelva los datos esperados
      expect(result.current[0]).toEqual([]);
      expect(result.current[1]).toBe(1); // Puedes ajustar esto según tus necesidades de prueba
    });
  });
});
