export const USERS_QUERY= `
query{
    queryUsers {
      first_name,
      last_name,
      primary_email,
      username,
      uuid,
      status
    }
  }
`;
