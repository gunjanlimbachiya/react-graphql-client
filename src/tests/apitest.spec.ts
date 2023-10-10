// // api.test.js
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';
// import postData from './api';

// describe('postData', () => {
//   it('should make a POST request', async () => {
//     // Arrange
//     const mock = new MockAdapter(axios);
//     const data = { key: 'value' };
//     const expectedResponse = { success: true };
//     mock.onPost('/api/post', data).reply(200, expectedResponse);

//     // Act
//     const response = await postData(data);

//     // Assert
//     expect(response).toEqual(expectedResponse);
//   });

//   it('should handle errors', async () => {
//     // Arrange
//     const mock = new MockAdapter(axios);
//     const data = { key: 'value' };
//     mock.onPost('/api/post', data).reply(500, { error: 'Internal Server Error' });

//     // Act and Assert
//     await expect(postData(data)).rejects.toThrow('Internal Server Error');
//   });
// });

// users.test.js (or users.test.ts for TypeScript)

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getUsers } from './path/to/your/getUsers'; // Import the getUsers function

describe('getUsers', () => {
  let mock;

  beforeEach(() => {
    // Create a new mock instance for each test
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    // Restore mock after each test
    mock.restore();
  });

  it('fetches successfully data from an API', async () => {
    // Mock the POST request to /graphql with a specific request body
    mock.onPost('/graphql', {
      queryName: 'queryUsers',
      query: 'YOUR_GRAPHQL_QUERY', // Define your GraphQL query here
    }).reply(200, {
      users: [{ id: 1, name: 'John' }, { id: 2, name: 'Alice' }],
    });

    // Call the getUsers function
    const response = await getUsers();

    // Assert that the response matches the expected data
    expect(response.data).toEqual({ users: [{ id: 1, name: 'John' }, { id: 2, name: 'Alice' }] });
  });

  it('handles API errors', async () => {
    // Mock the POST request to /graphql and return a 500 error
    mock.onPost('/graphql').reply(500, { error: 'Internal Server Error' });

    // Call the getUsers function
    try {
      await getUsers();
    } catch (error) {
      // Assert that the error message matches the expected error
      expect(error.message).toEqual('Request failed with status code 500');
    }
  });
});

