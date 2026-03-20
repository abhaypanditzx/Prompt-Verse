import { cookies } from "next/headers";
import AdminSidebar from "../../components/admin/Sidebar/AdminSidebar";

export default async function AdminLayout({ children }) {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token");

  return (
    <div className=" max-h-screen overflow-y-hidden min-h-screen flex bg-[#F2F4F7]">

      {/* Sidebar */}
      {token && (
        <div className="w-64 hidden sm:block">
          <AdminSidebar />
        </div>
      )}

      {/* Main Content */}
  <main className="flex-1 p-4 md:p-8 overflow-y-auto bg-[#F2F4F7]">
  <div className="max-w-4xl mx-auto w-full">
    {children}
  </div>
</main>

    </div>
  );
}