interface User {
    id: number;
    name: string;
    email: string;
  }
  
  export async function GetUsers():Promise<User[]>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const alluser:User[] = await res.json();
    return alluser
  };

  