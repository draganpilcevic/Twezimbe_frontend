"use client"

import GroupCreateDialog from "./group-create-dialog"
type Props = {
  isVisible: boolean
}
const GroupTopBar = ({isVisible}: Props) => {
  return (
    <div className="w-full inline-flex justify-between items-center p-5 fixed h-16 mx-2 z-50 bg-white shadow-md">
      <h2 className="inline font-bold text-blue-950">Group <span className="text-gray-500 font-normal">/Dashboard</span></h2>
      {/* <button className="bg-black text-white px-3 py-2 rounded-lg hover:bg-slate-600">Logout</button> */}

      {/* <div>
        </div> */}
      <div>
        <GroupCreateDialog isVisible={isVisible}/>
        <></>
      </div>
    </div>
  )
}

export default GroupTopBar