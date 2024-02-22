/**
 * Get Cookie
 * @param {string} cname - cookie name
 * @reference https://www.w3schools.com/js/js_cookies.asp
 * @returns string
 * */
export const getCookie = (cname: string) => {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document?.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

/**
 * Set cookie on document
 *
 * @param {string} cname - cookie name
 * @param {string} cvalue - cookie value
 * @param {number} exdays - expiry days
 * @returns void
 */
export const setCookie = (
  cname: string | undefined,
  cvalue: string,
  exdays: number
) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
};

/**
 * Delete cookie
 *
 * @param {string} cname - Cookie name to fetch
 * @returns void
 */
export const deleteCookie = (cname: string) => {
  document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
