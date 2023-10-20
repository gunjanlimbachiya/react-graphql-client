const axios = require('axios');

const apiUrl = 'YOUR_GRAPHQL_API_ENDPOINT';
const query = `
  query GetUserData($userId: ID!) {
    getUser(id: $userId) {
      id
      name
      email
      // Other fields you want to retrieve
    }
  }
`;

const userId = 'USER_ID_TO_FETCH'; // Replace this with the actual user ID you want to fetch

// Define variables object
const variables = {
  userId: userId
};

axios.post(apiUrl, {
  query: query,
  variables: variables
})
.then((response) => {
  console.log('Data: ', response.data.data);
})
.catch((error) => {
  console.error('Error: ', error);
});
