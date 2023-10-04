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
  