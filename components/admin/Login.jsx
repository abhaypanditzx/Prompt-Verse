"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/admin/dashboard");
    }
  };
  return (
    <form onSubmit={handleLogin} className="bg-white text-gray-500 max-w-[350px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Login Now
      </h2>
      <input
        id="email"
        className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
        type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <input
        id="password"
        className="w-full border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Enter your password"
        required
      />
      <div className="text-right py-4">
        <a className="text-blue-600 underline" href="#">
          Forgot Password
        </a>
      </div>
      <button
        type="submit"
        className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600/90 active:scale-95 transition py-2.5 rounded-full text-white"
      >
        Log in
      </button>
   
    </form>
  );
}
