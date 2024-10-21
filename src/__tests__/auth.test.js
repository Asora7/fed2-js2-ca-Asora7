import jest from 'jest-mock';
import { onLogin } from '../js/ui/auth/login';
import { logout } from '../js/ui/auth/logout';

describe('Authentication Tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('onLogin stores a token when provided with valid credentials', async () => {
    const mockUserData = { email: 'test@example.com', password: 'password' };
    const mockToken = 'mock-jwt-token';

    // Mock the fetch function
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            data: { accessToken: mockToken, name: 'Test User' },
          }),
      })
    );

    // Create a mock form
    document.body.innerHTML = `<form name="login">
      <input name="email" value="${mockUserData.email}" />
      <input name="password" value="${mockUserData.password}" />
      <button type="submit">Login</button>
    </form>`;

    // const loginForm = document.forms['login'];
    await onLogin(new Event('submit', { bubbles: true }));

    expect(localStorage.getItem('token')).toBe(mockToken);
    expect(localStorage.getItem('username')).toBe('Test User');
  });

  test('logout clears the token from localStorage', () => {
    localStorage.setItem('token', 'mock-jwt-token');
    localStorage.setItem('username', 'Test User');

    logout();

    expect(localStorage.getItem('token')).toBeNull();
    expect(localStorage.getItem('username')).toBeNull();
  });
});
