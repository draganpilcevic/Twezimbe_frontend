import React from "react";


export default function HomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
        {children}
    </div>
  )
}
