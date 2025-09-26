import { motion } from "framer-motion";

// Helper to split text into words with larger font
const AnimatedText = ({ text, delayOffset = 0 }) => {
  const words = text.split(" ");
  return (
    <p className="text-gray-700 mb-6 flex flex-wrap text-lg md:text-xl leading-relaxed">
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
  const whatIDo = [
    {
      title: "Frontend Development",
      desc: "Building modern, responsive UIs with React, JavaScript, and Tailwind CSS.",
    },
    {
      title: "UI/UX Design",
      desc: "Designing intuitive and accessible interfaces using Figma and usability principles.",
    },
    {
      title: "Problem Solving",
      desc: "Breaking down challenges and delivering clean, maintainable engineering solutions.",
    },
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-10"
      >
        About Me
      </motion.h2>

      {/* About Grid */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <AnimatedText
            text="I’m a junior software developer with hands-on experience building web applications and digital products. I focus on clean UI, strong UX patterns, and pragmatic engineering."
            delayOffset={0}
          />

          {/* Skills */}
          <ul className="flex flex-wrap gap-3 mb-6">
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

        {/* Image */}
        <motion.img
          src="https://via.placeholder.com/420x260"
          alt="Work preview"
          className="rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 80 }}
        />
      </div>

      {/* What I Do Section */}
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-3xl font-bold mt-16 mb-8"
      >
        What I Do
      </motion.h3>

      <div className="grid md:grid-cols-3 gap-8">
        {whatIDo.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: idx * 0.2, type: "spring", stiffness: 100 }}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg hover:scale-105 transition"
          >
            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
            <p className="text-gray-600 text-base">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// import { motion } from "framer-motion";

// // Helper to split text into words
// const AnimatedText = ({ text, delayOffset = 0 }) => {
//   const words = text.split(" ");
//   return (
//     <p className="text-gray-600 mb-4 flex flex-wrap">
//       {words.map((word, index) => (
//         <motion.span
//           key={index}
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: false, amount: 0.3 }}
//           transition={{
//             type: "spring",
//             stiffness: 100,
//             damping: 10,
//             delay: delayOffset + index * 0.05,
//           }}
//           className="mr-2"
//         >
//           {word}
//         </motion.span>
//       ))}
//     </p>
//   );
// };

// export default function About() {
//   const skills = ["React / JavaScript", "UI Design (Figma)", "Accessibility"];

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
//           <AnimatedText
//             text="I’m a junior software developer with hands-on experience building web applications and digital products. I focus on clean UI, strong UX patterns, and pragmatic engineering."
//             delayOffset={0}
//           />

//           <ul className="flex flex-wrap gap-3 mb-4">
//             {skills.map((skill, index) => (
//               <motion.li
//                 key={skill}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: false, amount: 0.3 }}
//                 transition={{
//                   delay: 0.5 + index * 0.2,
//                   type: "spring",
//                   stiffness: 120,
//                 }}
//                 className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md cursor-default hover:scale-105"
//               >
//                 {skill}
//               </motion.li>
//             ))}
//           </ul>

//           <AnimatedText
//             text="Interested in collaborating? I’m open to freelance and full-time roles."
//             delayOffset={0.5}
//           />
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

// 