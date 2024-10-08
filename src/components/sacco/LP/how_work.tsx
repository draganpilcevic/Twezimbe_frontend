import { motion } from "framer-motion";
import { useMemo } from "react";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Comprehensive Member Management",
  "Efficient Loan Processing",
]

const featuresContent = [
  "Effortlessly capture and manage member details to ensure seamless operations.",
  "Streamline loan applications, approvals, and disbursements for faster service within your group.",
]

const step1 = [
  "Create a Group",
  "Join a Group",
]
const step1Content = [
  "Start a new savings group with your friends, family, or community members.",
  "Streamline loan applications, approvals, and disbursements for faster service within your group.",
]

const step2 = [
  "Group Goal",
  "Personal Goals",
  "You are in charge",
]
const step2Content = [
  "Define a collective savings goal for your group, such as funding a community project or planning a group trip.",
  "Each member sets individual savings goals that contribute to the collective goal.",
  "We give you the technology, and you manage your money.",
]

const step3 = [
  "Automated Contributions",
  "Manual Contributions",
]
const step3Content = [
  "Set up automatic transfers to your savings account linked with Twezimbe, ensuring consistent progress towards your goals.",
  "Make one-time contributions whenever you have extra funds to save.",
]

const step4 = [
  "Weekly Challenges",
  "Savings Streak",
  "Savings Match",
  "Expense Cut",
]
const step4Content = [
  "Engage in fun weekly challenges designed to boost your savings, such as:",
  "See who can save a small amount every day for the longest streak.",
  "Pledge to match a friend's contribution for the week.",
  "Commit to cutting out a non-essential expense and saving the money instead.",
]

const step5 = [
  "Interactive Dashboard",
  "Milestone Celebrations",
]
const step5Content = [
  "Use the interactive dashboard to track both individual and collective progress in real time.",
  "Celebrate when your group reaches key milestones with in-app rewards, such as badges, discounts, and gift cards.",
]

const number = [
  0, 1
]
const number1 = [
  0, 1
]
const number2 = [
  0, 1, 2
]
const number3 = [
  0, 1, 2, 3
]

const WorkStep = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-2xl mt-8 mb-6 sm:mt-14 sm:mb-14 items-center justify-center gap-10 xl:gap-0 mx-auto"
      id="work"
    >
      <ScrollAnimationWrapper className="justify-center items-center text-center mb-20">
        <h3 className="text-3xl lg:text-4xl justify-center font-bold leading-relaxed text-[rgb(50,86,166)]">
          How it works
        </h3>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <motion.div className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 flex-col items-center justify-center md:space-x-10 lg:w-10/12 mx-auto sm:w-11/12" variants={scrollAnimation}>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: .2
              }
            }}
            className="h-[430px] text-[#4F5665] list-inside mt-5 border-green-500 border-2 p-10 rounded-xl">
            <h3 className="text-lg font-bold leading-relaxed text-[rgb(50,86,166)] lg:text-lg xl:text-2xl sm:text-lg">
              Step1: Create or Join a Savings Group
            </h3>
            {number.map((num, index) => (
              <motion.li
                className="relative ml-5 circle-check custom-list flex lg:text-sm xl:text-base sm:text-sm text-sm"
                style={{ opacity: 1 }}
                key={num}
              >
                <div className="flex flex-col">
                  <span className="font-bold">
                    {step1[num]}
                  </span>
                  <span>
                    {step1Content[num]}
                  </span>
                </div>
              </motion.li>
            )
            )}
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: .2
              }
            }}
            className="h-[430px] text-[#4F5665] list-inside mt-5 border-green-500 border-2 p-10 rounded-xl">
            <h3 className="text-lg m-auto font-bold leading-relaxed text-[rgb(50,86,166)] lg:text-lg xl:text-2xl sm:text-lg">
            Step 2: Set Collective and Individual Goals
            </h3>
            {number2.map((num, index) => (
              <motion.li
                className="relative ml-5 circle-check custom-list flex lg:text-sm xl:text-base sm:text-sm text-sm"
                style={{ opacity: 1 }}
                key={num}
              >
                <div className=" flex flex-col gap-2">
                  <span className=" font-bold">
                    {step2[num]}
                  </span>
                  <span>
                    {step2Content[num]}
                  </span>
                </div>
              </motion.li>
            )
            )}
          </motion.div>
        </motion.div>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <motion.div className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 flex-col items-center justify-center md:space-x-10  lg:w-10/12 mx-auto sm:w-11/12" variants={scrollAnimation}>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: .2
              }
            }}
            className="h-[430px] text-[#4F5665] list-inside mt-5 border-green-500 border-2 p-10 rounded-xl">
            <h3 className="text-lg m-auto font-bold leading-relaxed text-[rgb(50,86,166)] lg:text-lg xl:text-2xl sm:text-lg">
            Step 3: Make Regular Contributions
            </h3>
            {number1.map((num, index) => (
              <motion.li
                className="relative ml-5 circle-check custom-list flex lg:text-sm xl:text-base sm:text-sm text-sm"
                style={{ opacity: 1 }}
                key={num}
              >
                <div className=" flex flex-col gap-2">
                  <span className=" font-bold">
                    {step3[num]}
                  </span>
                  <span>
                    {step3Content[num]}
                  </span>
                </div>
              </motion.li>
            )
            )}
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: .2
              }
            }}
            className="h-[430px] text-[#4F5665] list-inside mt-5 border-green-500 border-2 p-10 rounded-xl">
            <h3 className="text-lg m-auto font-bold leading-relaxed text-[rgb(50,86,166)] lg:text-lg xl:text-2xl sm:text-lg">
            Step 4: Participate in Savings Challenges
            </h3>
            {number3.map((num, index) => (
              <motion.li
                className="relative ml-5 circle-check custom-list flex lg:text-sm xl:text-base sm:text-sm text-sm"
                style={{ opacity: 1 }}
                key={num}
              >
                <div className=" flex flex-col gap-2">
                  <span className=" font-bold">
                    {step4[num]}
                  </span>
                  <span>
                    {step4Content[num]}
                  </span>
                </div>
              </motion.li>
            )
            )}
          </motion.div>
        </motion.div>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <motion.div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 flex-col items-center justify-center space-x-10 lg:w-10/12 mx-auto sm:w-11/12" variants={scrollAnimation}>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: {
                duration: .2
              }
            }}
            className=" text-[#4F5665] list-inside mt-5 border-green-500 border-2 p-10 rounded-xl justify-start items-start">
            <h3 className="text-lg m-auto font-bold leading-relaxed text-[rgb(50,86,166)] lg:text-lg xl:text-2xl sm:text-lg">
            Step 5: Track Progress and Celebrate Milestones
            </h3>
            {number.map((num, index) => (
              <motion.li
                className="relative ml-5 circle-check custom-list flex items-center justify-start sm:text-base text-sm"
                style={{ opacity: 1 }}
                key={num}
              >
                <div className=" flex flex-col gap-2">
                  <span className=" font-bold">
                    {step5[num]}
                  </span>
                  <span>
                    {step5Content[num]}
                  </span>
                </div>
              </motion.li>
            )
            )}
          </motion.div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default WorkStep;
