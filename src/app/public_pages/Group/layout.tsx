import React from "react";


export default function GroupLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
      <>
        {children}
      </>
  )
}
