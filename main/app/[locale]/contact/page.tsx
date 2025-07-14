"use client";
import ContactInfo from "@/components/blocs/ContactInfo";
import { motion } from "framer-motion";

const page = () => {
  return (
    <main>
      <motion.div
        initial="offscreen"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
      >
        <ContactInfo />
      </motion.div>
    </main>
  );
};

export default page;
