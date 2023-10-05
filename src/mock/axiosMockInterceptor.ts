// import axios from 'axios';
// import mockData from './mockedData/users.json';

// // Axios interceptor to mock GraphQL queries
// export const axiosInstance = axios.create();
// const createMockInterceptor = () => {

// axiosInstance.interceptors.request.use(
//   async (config) => {
//     if (config.url === '/graphql' && config.method === 'post') {
//       const requestBody = JSON.parse(JSON.stringify(config.data));
//       const query = requestBody.queryName;
//       console.log(query);
//       if (mockData.hasOwnProperty(query)) {
//         const mockedResponse = (mockData as Record<string, any>)[query];
//         console.log(mockedResponse);
//         return Promise.resolve({
//           ...config,
//           data: mockedResponse
//         });
//       } else {
//         return Promise.reject(new Error('Mock data not found for the query'));
//       }
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// )}

// export default createMockInterceptor;

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import mockData from './mockedData/users.json';

const mock = new MockAdapter(axios);

const createMockInterceptor = () => {
    mock.onPost('/graphql').reply((config) => {
    try {
      const requestBody = JSON.parse(config.data);
      const query = requestBody.queryName;
      if (mockData.hasOwnProperty(query)) {
        return [200, (mockData as Record<string, any>)[query]];
      } else {
        return [404, { error: 'Mock data not found for the query' }];
      }
    } catch (error) {
      return [400, { error: 'Invalid request body' }];
    }
  })}

export default createMockInterceptor;
