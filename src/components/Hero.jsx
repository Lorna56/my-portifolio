import { motion } from "framer-motion";
import { Rocket } from "lucide-react"; // Rocket icons
import myPhoto from "../assets/lorna.jpg";

export default function Hero() {
  // Variants for dancing slide-in text (with scroll awareness)
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    }),
  };

  return (
    <section
      id="home"
      className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center relative"
    >
      {/* Text Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h1
  className="text-4xl md:text-6xl font-bold mb-4"
  animate={{ x: [0, 10, -10, 0] }} // Moves left-right
  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
>
  LORNA NAULA
</motion.h1>

        <motion.p
          custom={1}
          variants={textVariant}
          className="text-indigo-600 font-semibold mb-4"
        >
          JUNIOR SOFTWARE DEVELOPER
        </motion.p>

        <motion.p
          custom={2}
          variants={textVariant}
          className="text-gray-600 mb-6"
        >
          Passionate about crafting clean, maintainable code and intuitive
          interfaces that make technology accessible and enjoyable.
        </motion.p>

        <motion.div custom={3} variants={textVariant} className="space-x-3">
          <a
            href="#projects"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700"
          >
            See work
          </a>
          <a
            href="#contact"
            className="border border-gray-300 px-4 py-2 rounded-lg hover:border-indigo-600"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      {/* Image Section with rockets + waves */}
      <div className="flex justify-center relative">
        {/* Energy Waves */}
        <motion.div
          className="absolute w-72 h-72 rounded-full border-8 border-indigo-500 opacity-70"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: [0.8, 1.4, 1], opacity: [0.8, 0.4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full border-8 border-pink-500 opacity-60"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.7, 1.6, 1], opacity: [0.6, 0.3, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Orbiting Rocket Left */}
        <motion.div
          className="absolute text-indigo-600"
          style={{ originX: 2, originY: 2 }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          <Rocket size={36} />
        </motion.div>

        {/* Orbiting Rocket Right */}
        <motion.div
          className="absolute text-pink-500"
          style={{ originX: -2, originY: -2 }}
          initial={{ rotate: 180 }}
          animate={{ rotate: -180 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <Rocket size={36} />
        </motion.div>

        {/* Main Photo */}
        <motion.div
          className="w-60 h-60 rounded-full border-8 border-gray-100 shadow-xl overflow-hidden relative z-10"
          initial={{ scale: 0 }}
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 3, -3, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        >
          <img
            src={myPhoto}
            alt="Lorna Naula"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

// import { motion } from "framer-motion";
// import { Rocket } from "lucide-react"; // Rocket icons
// import myPhoto from "../assets/lorna.jpg";

// export default function Hero() {
//   // Variants for dancing slide-in text
//   const textVariant = {
//     hidden: { opacity: 0, x: 50 },
//     visible: (i) => ({
//       opacity: 1,
//       x: 0,
//       transition: {
//         delay: i * 0.3,
//         type: "spring",
//         stiffness: 80,
//         damping: 10,
//       },
//     }),
//   };

//   return (
//     <section
//       id="home"
//       className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center relative"
//     >
//       {/* Text Section */}
//       <motion.div initial="hidden" animate="visible">
//         <motion.h1
//           custom={0}
//           variants={textVariant}
//           className="text-4xl md:text-6xl font-bold mb-4"
//         >
//           LORNA NAULA
//         </motion.h1>

//         <motion.p
//           custom={1}
//           variants={textVariant}
//           className="text-indigo-600 font-semibold mb-4"
//         >
//           JUNIOR SOFTWARE DEVELOPER
//         </motion.p>

//         <motion.p
//           custom={2}
//           variants={textVariant}
//           className="text-gray-600 mb-6"
//         >
//           Passionate about crafting clean, maintainable code and intuitive
//           interfaces that make technology accessible and enjoyable.
//         </motion.p>

//         <motion.div
//           custom={3}
//           variants={textVariant}
//           className="space-x-3"
//         >
//           <a
//             href="#projects"
//             className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700"
//           >
//             See work
//           </a>
//           <a
//             href="#contact"
//             className="border border-gray-300 px-4 py-2 rounded-lg hover:border-indigo-600"
//           >
//             Get in touch
//           </a>
//         </motion.div>
//       </motion.div>

//       {/* Image Section with rockets + waves */}
//       <div className="flex justify-center relative">
//         {/* Energy Waves */}
//         <motion.div
//           className="absolute w-72 h-72 rounded-full border-8 border-indigo-500 opacity-70"
//           initial={{ scale: 0.6, opacity: 0 }}
//           animate={{ scale: [0.8, 1.4, 1], opacity: [0.8, 0.4, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute w-96 h-96 rounded-full border-8 border-pink-500 opacity-60"
//           initial={{ scale: 0.5, opacity: 0 }}
//           animate={{ scale: [0.7, 1.6, 1], opacity: [0.6, 0.3, 0] }}
//           transition={{ duration: 3, repeat: Infinity }}
//         />

//         {/* Orbiting Rocket Left */}
//         <motion.div
//           className="absolute text-indigo-600"
//           style={{ originX: 2, originY: 2 }}
//           initial={{ rotate: 0 }}
//           animate={{ rotate: 360 }}
//           transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
//         >
//           <Rocket size={36} />
//         </motion.div>

//         {/* Orbiting Rocket Right */}
//         <motion.div
//           className="absolute text-pink-500"
//           style={{ originX: -2, originY: -2 }}
//           initial={{ rotate: 180 }}
//           animate={{ rotate: -180 }}
//           transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
//         >
//           <Rocket size={36} />
//         </motion.div>

//         {/* Main Photo */}
//        <motion.div
//           className="w-60 h-60 rounded-full border-8 border-gray-100 shadow-xl overflow-hidden relative z-10"
//           initial={{ scale: 0 }}
//           animate={{
//             scale: [1, 1.05, 1],
//             rotate: [0, 3, -3, 0],
//           }}
//           transition={{
//             repeat: Infinity,
//             duration: 4,
//             ease: "easeInOut",
//           }}
//         >
//           <img
//             src={myPhoto}
//             alt="Lorna Naula"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }
