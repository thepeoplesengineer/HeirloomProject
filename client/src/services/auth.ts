interface LoginCredentials {
    email: string;
    password: string;
  }
  
  interface RegisterData {
    username: string;
    email: string;
    password: string;
  }
  
 
  
  export const loginUser = async (credentials: LoginCredentials) => {
    const response = await fetch(`/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
  
    if (!response.ok) {
      throw new Error('Failed to login');
    }
  
    const data = await response.json();
    localStorage.setItem('token', data.token); 
    return data;
  };
  
  
  // Register User
export const registerUser = async (credentials: RegisterData): Promise<void> => {
    const response = await fetch(`/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
  
    if (!response.ok) {
      throw new Error('Failed to register');
    }
  };