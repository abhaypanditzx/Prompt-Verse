import { cookies } from "next/headers";
import AdminSidebar from "../../components/admin/Sidebar/AdminSidebar";

export default async function AdminLayout({ children }) {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token");

  return (
    <div className="flex min-h-screen ">

      {/* Sidebar */}
      {token && <AdminSidebar />}

      {/* Content */}
      <main className={`flex-1 ${token ? "p-6" : ""} overflow-hidden relative bg-[#F2F4F7]`}>
        {children}
      </main>

    </div>
  );
}