import AirtelDaschboardSection from "@/components/mtn/components/AirtelDaschboardSection copy"
import MTNDaschboardSection from "@/components/mtn/components/MTNDaschboardSection"
import { Divider } from "@mui/material"

const SaccoDashboard = () => {
    return (
        <>
        <div className="flex-1 w-full">
        <h1>MTN MOBILE MONEY</h1>
        <MTNDaschboardSection />

        <Divider />

        <h1>Airtel MONEY</h1>
        <AirtelDaschboardSection />

      </div>
        </>
    )
}

export default SaccoDashboard