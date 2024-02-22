import { getCookie } from './cookies';

/**
 * you can change the 'admin-key' to any other name as desired
 * @returns this resturn the cookie value as admin-key
 */
export const getHeaders = () => ({
  Authorization: `Bearer ${getCookie('admin-key')}`,
});
