import {createCookieSessionStorage} from "@remix-run/node";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    secrets: ['secret_squirrel2'],
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    httpOnly: true,
  },
});

export async function getFromSession(name: string, request: Request){
  const session = await sessionStorage.getSession(
      request.headers.get('Cookie')
  );
  const value = session.get(name);
  return value || null;
}

export async function setSession(name: string, value: any, request: Request) {
  const session = await sessionStorage.getSession(
      request.headers.get('Cookie')
  );
  session.set(name, value);
  const headers = request.headers;
  headers.append('Set-Cookie', await sessionStorage.commitSession(session));
  return headers;
}