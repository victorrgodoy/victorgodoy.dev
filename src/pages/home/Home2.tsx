// import { motion, AnimatePresence } from "motion/react";
// import SocialLink from "./ui/SocialLink";
// import { useState } from "react";
// import useSound from "use-sound";
// import clickSfx from "../assets/sounds/click.wav";
// import ButtonMenuNav from "../../components/ui/button/ButtonMenuNav";
// import MenuNav from "../../components/layout/MenuNav";
// import { useEffect } from "react";

// const containerVariants = {
//   hidden: { opacity: 0, x: -50 },
//   visible: { opacity: 1, x: 0 },
//   exit: { opacity: 0, y: -100 },
// };

// function Home() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [play] = useSound(clickSfx);

//   useEffect(() => {
//     if (isOpen && !isOpen) {
//       document.body.style.overflowX = "hidden";
//     } else {
//       document.body.style.overflowX = "";
//     }
//   }, [isOpen]);

//   return (
//     <AnimatePresence>
//       <motion.section
//         className="grid grid-cols-24 gap-6 h-full"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//       >
//         <div className="col-span-8 flex flex-col justify-between">
//           {/* first div */}
//           <div>
//             <h1 className="text-3xl md:text-4xl font-bold mt-24 mb-4">
//               VICTOR GODOY
//             </h1>

//             <div className="text-sm/4 mb-14">
//               A Systems Analysis and Development student passionate about modern
//               web applications, AI-powered solutions, and robust server-side
//               development with databases.
//             </div>

//             <div className="flex gap-4 text-sm">
//               <SocialLink
//                 href="https://github.com/victorrgodoy"
//                 descripton="GitHub"
//               />
//               <SocialLink
//                 href="https://www.linkedin.com/in/victorgodoy-/"
//                 descripton="LinkedIn"
//               />
//             </div>
//           </div>
//           <p className="text-sm">A full-stack developer</p>
//         </div>

//         {/* second div */}
//         <div className="col-span-8 flex flex-col justify-end items-center">
//           Menu
//           <ButtonMenuNav isOpen={isOpen} setIsOpen={setIsOpen} play={play} />
//         </div>
//       </motion.section>

//       <AnimatePresence mode="wait">
//           {isOpen && (
//             <MenuNav
//               key="menu"
//               setIsOpen={setIsOpen}
//             />
//           )}
//         </AnimatePresence>
//     </AnimatePresence>
//   );
// }

// export default Home;
