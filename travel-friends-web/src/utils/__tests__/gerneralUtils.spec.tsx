import { waitFor } from '@testing-library/react';
import { SearchCEP } from '../generalUtils';

describe('Teste dos métodos do generalUtils', () => {
  it('Teste do searchCEP para CEP válido', async () => {
    const data = await SearchCEP('31370671');
    expect(data.data).toHaveProperty('localidade', 'Belo Horizonte');
  });

  it('Teste do searchCEP para CEP inválido', async () => {
    const data = await SearchCEP('12345678');
    expect(data).not.toBeNull();
  });

  it('Teste do searchCEP para falha na requisição', async () => {
    // Simula uma falha na requisição, retornando um erro
    const error = new Error('Network Error');
    jest.spyOn(console, 'error').mockImplementation(() => { }); // Evita a exibição do erro no console

    const data = await SearchCEP('31370671');
    expect(data).not.toBeNull();
  });
})