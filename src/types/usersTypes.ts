interface User {
    uuid: string;
    first_name: string;
    last_name:string;
    status:string,
    username:string;
    primary_email: string;
  }

  export type Users=User[];
  
  export interface GraphQLResponse {
    data: { queryUsers: User[] } 
  }
  
  // types.ts
export type UserData = {
  uuid: string;
  first_name: string;
  last_name: string;
  status: string;
  primary_email: string;
  username: string;
};

export type MockedData = {
  queryUsers: {
    data: {
      users: UserData[];
    };
  };
};

export interface QueryUsersResponse {
  data: {
    queryUsers: User[];
  };
};

export interface QueryType {
  queryUsers: QueryUsers;
}
export interface QueryUsers {
  data: Data;
}
export interface Data {
  users?: (UsersEntity)[] | null;
}
export interface UsersEntity {
  uuid: string;
  first_name: string;
  last_name: string;
  status: string;
  primary_email: string;
  username: string;
}
