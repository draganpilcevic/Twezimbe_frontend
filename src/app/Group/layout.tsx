"use client"
import GroupSideMenuBar from "@/components/group/GroupSideMenuBar";
import GroupTopBar from "@/components/group/GroupTopBar";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function GroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isVisible, setIsVisible] = useState(true);

  const toggleSideBar = () => {
    setIsVisible(!isVisible);
  }

  const router = useRouter()
  const access_token = Cookies.get('access-token')

  useEffect(() => {
    if (!access_token) {
      router.push('/public_pages/SignIn')
    }
  }, [])
  return (
    <>
      {/* <Header /> */}
      <div className="flex min-h-screen w-full ">
        <GroupSideMenuBar
          toggleSideBar={toggleSideBar}
          isVisible={isVisible}
        />
        <div className={`flex flex-col w-full bg-slate-100 ${isVisible ? "ml-72" : "ml-14"}`}>
          <GroupTopBar
            isVisible={isVisible}
          />
          <div className="p-5 mt-16">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
