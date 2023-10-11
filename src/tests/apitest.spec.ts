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
// ParentComponent.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ParentComponent from './ParentComponent';
import ChildComponent from './ChildComponent'; // Import your ChildComponent

jest.mock('./api');

test('receives and processes data from child component', () => {
  const mockChildData = {
    key: 'value',
    // ...other properties
  };

  const { getByText, getByTestId } = render(<ParentComponent />);

  // Mock the sendDataToParent function to simulate data from ChildComponent
  const sendDataToParentMock = jest.fn();
  jest.spyOn(ChildComponent, 'default').mockImplementation(props => {
    props.sendDataToParent(mockChildData);
    return <div>Mocked Child Component</div>;
  });

  // Find the button in the child component
  const button = getByText('Send Data to Parent');
  
  // Click the button to trigger the callback from the child component
  fireEvent.click(button);

  // Check if the parent component received data from the child component
  expect(sendDataToParentMock).toHaveBeenCalledWith(mockChildData);

  // Check if the received data is displayed in the parent component
  const receivedDataElement = getByTestId('received-data');
  expect(receivedDataElement).toHaveTextContent(JSON.stringify(mockChildData));
});
