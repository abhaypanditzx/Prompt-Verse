import { cookies } from "next/headers";
import jsonwebtoken from "jsonwebtoken";
import Dashboard from "./dashboard/page";
import { redirect } from "next/navigation";

export default async function Admin() {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token");
  if (!token) {
    console.log("no token found");
    return redirect("/login");
  }
  console.log("token found", token.value);
  try {
    const decodedToken = jsonwebtoken.verify(
      token.value,
      process.env.JWT_SECRET,
    );
    if (decodedToken.email === process.env.ADMIN_EMAIL) {
      return <Dashboard />
    }
    return redirect("/login");
  } catch (error) {
    console.log("error in token verification", error);
    return redirect("/login");
  }
}
