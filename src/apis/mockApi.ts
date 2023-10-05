import axios from "axios";
import { USERS_QUERY } from "../queries/users";
import createMockInterceptor from "../mock/axiosMockInterceptor";

// Call the createMockInterceptor function to set up the interceptor
createMockInterceptor();

export const getUsers = async () => {
    // try {
    //     const response = await axios.post('/graphql', JSON.stringify({
    //         queryName: 'queryUsers',
    //         query: USERS_QUERY
    //       }), {
    //         headers: {
    //           'Content-Type': 'application/json'
    //         }
    //       });

    //   console.log(response);
    //   return response;

    // } catch (error:any) {
    //   console.error('Error:', error.message);
    // }

    try {
        const response = await axios.post('/graphql', {
          query: USERS_QUERY,
          queryName: 'queryUsers'
        });
        console.log(response.data); // Mocked response for the GraphQL query
      } catch (error) {
        console.error(error);
      }
  };