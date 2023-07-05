// src/__tests__/App.test.tsx
import * as cookie from 'cookie';

// sample cookie url
describe('cookie testing', () => {
  it('should work as expected', () => {
    const cookieUrl =
      'https://www.google.com/; domain=.google.com; path=/; expires=Sun, 17-Oct-2021 09:22:10 GMT; Secure; HttpOnly; SameSite=None';
    const _cookie = cookie.parse(cookieUrl);

    expect(_cookie).toEqual({
      domain: '.google.com',
      path: '/',
      expires: 'Sun, 17-Oct-2021 09:22:10 GMT',
      SameSite: 'None',
    });
  });
});
