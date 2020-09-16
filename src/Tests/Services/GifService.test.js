import '@testing-library/jest-dom';
import { getGifs } from '../../Services/GifService';

describe('GifService Tests', () => {
  test('Check GifService Return 10 Elements When Pass Category', async () => {
    const gifs = await getGifs('sharingan');
    expect(gifs.length).toBe(10);
  });

  test('Check GifService Return 0 Elements When Not Pass Category', async () => {
    const gifs = await getGifs();
    expect(gifs.length).toBe(0);
  });
});
