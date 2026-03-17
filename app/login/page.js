import Login from "../../components/admin/Login";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token");
  if (token) {
    return redirect("/admin");
  }
  return (  
    <div className="h-screen w-full flex justify-center items-center bg-[#041837]">
      <Login />
    </div>
  );
}
