// api.test.js
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import postData from './api';

describe('postData', () => {
  it('should make a POST request', async () => {
    // Arrange
    const mock = new MockAdapter(axios);
    const data = { key: 'value' };
    const expectedResponse = { success: true };
    mock.onPost('/api/post', data).reply(200, expectedResponse);

    // Act
    const response = await postData(data);

    // Assert
    expect(response).toEqual(expectedResponse);
  });

  it('should handle errors', async () => {
    // Arrange
    const mock = new MockAdapter(axios);
    const data = { key: 'value' };
    mock.onPost('/api/post', data).reply(500, { error: 'Internal Server Error' });

    // Act and Assert
    await expect(postData(data)).rejects.toThrow('Internal Server Error');
  });
});
