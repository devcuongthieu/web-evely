import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

export async function serverSession() {
  const session = await getServerSession(authOptions);
  return session;
}

export async function redirectIfAuthenticated() {
  const session = await serverSession();

  if (session) {
    redirect("/");
  }
}

export async function getRole() {
  const session = await serverSession();
  return session?.user.role;
}

export async function getUser() {
  const session = await serverSession();
  return session?.user;
}
