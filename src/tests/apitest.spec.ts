// users.test.js (or users.test.ts for TypeScript)
import axios from 'axios';
import { getUsers } from './path/to/your/getUsers';

jest.mock('axios'); // Automatically mocks all functions of the axios module

describe('getUsers', () => {
  it('fetches successfully data from an API', async () => {
    // Mock the post function of the mock axios instance
    axios.post.mockResolvedValue({
      data: {
        users: [{ id: 1, name: 'John' }, { id: 2, name: 'Alice' }],
      },
    });

    const result = await getUsers(axios);

    expect(result).toEqual([{ id: 1, name: 'John' }, { id: 2, name: 'Alice' }]);

    // Assert that axios.post was called with the correct parameters
    expect(axios.post).toHaveBeenCalledWith('/graphql', {
      queryName: 'queryUsers',
      query: 'YOUR_GRAPHQL_QUERY',
    });
  });

  it('handles API errors', async () => {
    // Mock the post function to simulate a network error
    axios.post.mockRejectedValue(new Error('Request failed'));

    // Use async/await and expect.assertions to verify that the promise is rejected
    expect.assertions(1);
    await expect(getUsers(axios)).rejects.toThrow('Request failed');
  });
});
