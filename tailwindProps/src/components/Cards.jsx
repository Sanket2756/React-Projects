import React from "react";

// Reusable card component
export default function Cards({
  name = "Delba",
  btntxt = "View Profile",
  image,
  bio = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
}) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-[400px] w-[300px] overflow-hidden rounded-xl shadow-2xl">
        <img
          src={
            image ??
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
          }
          alt="profile"
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-6 left-6 right-6 text-left">
          <h1 className="text-3xl font-semibold text-white">{name}</h1>
          <p className="mt-1 text-sm text-gray-200">{bio}</p>
          <button className="mt-4 rounded-lg bg-white/95 px-4 py-2 text-xs font-semibold text-gray-900 shadow hover:bg-white">
            {btntxt}
          </button>
        </div>
      </div>
    </div>
  );
}