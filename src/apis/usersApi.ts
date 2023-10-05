import axios from 'axios';
import { GraphQLResponse, Users } from '../types/usersTypes';
import { USERS_QUERY } from '../queries/users';

const GRAPHQL_API_URL = 'http://localhost:4000';

export async function getUsers(): Promise<Users> {
  try {
    const response = await axios.post<GraphQLResponse>(GRAPHQL_API_URL, {
      query: USERS_QUERY,
    });

    // Extract and return the users from the response
    console.log(response); 

    return response.data.data.queryUsers;
  } catch (error) {
    // Handle errors here
    console.error('Error fetching users:', error);
    throw error;
  }
}