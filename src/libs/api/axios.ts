"use client";

import axios, { AxiosError, AxiosResponse } from "axios";
import { getSession, signOut } from "next-auth/react";
import { useEffect } from "react";

export const ApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Create an unauthenticated Axios instance
export const ApiClientUnAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

ApiClient.interceptors.request.use(async (request) => {
  const session = await getSession();

  if (session) {
    request.headers["Authorization"] = `Bearer ${session.user.access_token}`;
  }

  return request;
});

// AxiosInterceptor component for handling responses and errors
export const AxiosInterceptor = ({ children }: any) => {
  useEffect(() => {
    const resInterceptor = (response: AxiosResponse) => {
      return response;
    };

    const errInterceptor = (error: AxiosError) => {
      console.log({ error });
      if (error.response?.status === 401) {
        signOut({ callbackUrl: "/sign-in" });
      }

      return Promise.reject(error.message);
    };

    const interceptor = ApiClient.interceptors.response.use(
      resInterceptor,
      errInterceptor
    );

    return () => ApiClient.interceptors.response.eject(interceptor);
  }, []);

  return children;
};
