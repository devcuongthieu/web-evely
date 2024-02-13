import SignIn from "@/features/Auth/views/SignIn/SignIn";
import { redirectIfAuthenticated } from "../utils/server";

export default async function Page() {
  await redirectIfAuthenticated();
  return <SignIn />;
}
