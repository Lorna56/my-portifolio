import { motion } from "framer-motion";

// Helper to split text into words
const AnimatedText = ({ text, delayOffset = 0 }) => {
  const words = text.split(" ");
  return (
    <p className="text-gray-600 mb-4 flex flex-wrap">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: delayOffset + index * 0.05,
          }}
          className="mr-2"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};

export default function About() {
  const skills = ["React / JavaScript", "UI Design (Figma)", "Accessibility"];

  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-8"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <AnimatedText
            text="I’m a junior software developer with hands-on experience building web applications and digital products. I focus on clean UI, strong UX patterns, and pragmatic engineering."
            delayOffset={0}
          />

          <ul className="flex flex-wrap gap-3 mb-4">
            {skills.map((skill, index) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  delay: 0.5 + index * 0.2,
                  type: "spring",
                  stiffness: 120,
                }}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md cursor-default hover:scale-105"
              >
                {skill}
              </motion.li>
            ))}
          </ul>

          <AnimatedText
            text="Interested in collaborating? I’m open to freelance and full-time roles."
            delayOffset={0.5}
          />
        </div>

        <motion.img
          src="https://via.placeholder.com/420x260"
          alt="Work preview"
          className="rounded-lg shadow"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 80 }}
        />
      </div>
    </section>
  );
}

// import { motion } from "framer-motion";

// export default function About() {
//   const textVariant = {
//     hidden: { opacity: 0, x: 50 },
//     visible: (i) => ({
//       opacity: 1,
//       x: 0,
//       transition: {
//         delay: i * 0.2,
//         type: "spring",
//         stiffness: 80,
//         damping: 10,
//       },
//     }),
//   };

//   const skillVariant = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: (i) => ({
//       opacity: 1,
//       scale: 1,
//       transition: { delay: 0.5 + i * 0.2, type: "spring", stiffness: 120 },
//     }),
//   };

//   return (
//     <section id="about" className="max-w-6xl mx-auto px-4 py-20">
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: false, amount: 0.3 }}
//         transition={{ duration: 0.8 }}
//         className="text-3xl font-bold mb-8"
//       >
//         About Me
//       </motion.h2>

//       <div className="grid md:grid-cols-2 gap-10 items-center">
//         <div>
//           <motion.p
//             custom={0}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.3 }}
//             variants={textVariant}
//             className="text-gray-600 mb-4"
//           >
//             I’m a junior software developer with hands-on experience building web applications and digital products.
//             I focus on clean UI, strong UX patterns, and pragmatic engineering.
//           </motion.p>

//           <ul className="flex flex-wrap gap-3 mb-4">
//             {["React / JavaScript", "UI Design (Figma)", "Accessibility"].map(
//               (skill, index) => (
//                 <motion.li
//                   key={skill}
//                   custom={index}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: false, amount: 0.3 }}
//                   variants={skillVariant}
//                   className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md cursor-default hover:scale-105"
//                 >
//                   {skill}
//                 </motion.li>
//               )
//             )}
//           </ul>

//           <motion.p
//             custom={3}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false, amount: 0.3 }}
//             variants={textVariant}
//             className="text-gray-600"
//           >
//             Interested in collaborating? I’m open to freelance and full-time roles.
//           </motion.p>
//         </div>

//         <motion.img
//           src="https://via.placeholder.com/420x260"
//           alt="Work preview"
//           className="rounded-lg shadow"
//           initial={{ opacity: 0, y: 50, scale: 0.95 }}
//           whileInView={{ opacity: 1, y: 0, scale: 1 }}
//           viewport={{ once: false, amount: 0.3 }}
//           transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 80 }}
//         />
//       </div>
//     </section>
//   );
// }
