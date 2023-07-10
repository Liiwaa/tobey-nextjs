import { LoginModel } from '@/interfaces/components/Login';
import { serialize } from 'cookie';

export function handleLoginResponse(response: LoginModel) {
    const { token, user } = response.data;
  
    // Store the token in an HTTP-only cookie
    const tokenCookie = serialize('token', token, {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
  
    document.cookie = tokenCookie;
  
    // Store the user data in local storage or session storage
    // You can choose whichever storage mechanism suits your needs
    localStorage.setItem('user', JSON.stringify(user));
  }