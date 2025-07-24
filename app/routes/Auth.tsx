import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export const meta = () => {
  return [
    { title: "CVForge | Auth" },
    { name: "description", content: "Log into your account" },
  ];
};

const Auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const navigate = useNavigate();
  const next = location.search.split("next=")[1];

  useEffect(() => {
    if (auth.isAuthenticated) navigate(next);
  }, [auth.isAuthenticated, next]);

  return (
    <main className="relative min-h-screen flex items-center justify-center px-4">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 rounded-2xl  bg-[#161636]  border-[#2a2a50]   backdrop-blur-2xl border  shadow-xl p-10 text-white">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-3xl font-semibold tracking-wide text-white">
              Welcome
            </h1>
            <h2 className="text-base text-gray-300">
              Log in to continue your resume analyzing journey
            </h2>
          </div>

          <div>
            {isLoading ? (
              <button className="w-full py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse">
                <p>Signing You in...</p>
              </button>
            ) : (
              <>
                {auth.isAuthenticated ? (
                  <div className="flex flex-col items-center gap-4">
                    <p 
                    onClick={() => navigate("/")}
                    className="text-sm text-gray-300 hover:underline cursor-pointer">
                      ← Back to Home Page
                    </p>

                    <button
                      onClick={auth.signOut}
                      className="w-full py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-red-500 to-red-700 hover:brightness-110 transition-all"
                    >
                      Log out
                    </button>
                  </div>
                ) : (
                  <button
                    className="w-full py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:brightness-110 transition"
                    onClick={auth.signIn}
                  >
                    <p>Login</p>
                  </button>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Auth;
