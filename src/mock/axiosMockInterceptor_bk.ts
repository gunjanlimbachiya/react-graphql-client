
import axios from 'axios';
import mockedData from './mockedData/users.json';
import { QueryUsers } from '../types/usersTypes'; // Importing the types from types.ts



type RequestData = {
    queryName: string;
  };

const createMockInterceptor = () => {
  axios.interceptors.request.use((config) => {
    if (config.url && config.url.endsWith('/graphql') && config.method === 'post') {
     console.log(config.data);

    const requestData: RequestData = JSON.parse(config.data);
    const { queryName } = requestData;
      const queryUsers:QueryUsers=(mockedData as Record<string, any>)[queryName];
      const mockedResponse: QueryUsers = queryUsers;
      console.log(mockedResponse);
      if (mockedResponse) {
        console.log(mockedResponse,config);
        return Promise.resolve({
          data: mockedResponse,
          status: 200,
          statusText: 'OK',
          headers: config.headers,
          config: config
        });
      }
    }
    return config;
  });
};

export default createMockInterceptor;
