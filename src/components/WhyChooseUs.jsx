import React from "react";
import { ShieldCheck, Users, BadgeCheck, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Verified Listings",
    description:
      "All properties are verified with NOC approvals and legal documentation.",
    icon: <ShieldCheck className="w-10 h-10 text-white" />,
  },
  {
    title: "Experienced Team",
    description:
      "Our agents have years of experience in Islamabad, Rawalpindi & Lahore markets.",
    icon: <Users className="w-10 h-10 text-white" />,
  },
  {
    title: "Trusted Developers",
    description:
      "We work with top names like Bahria Town, Park View City & Capital Smart City.",
    icon: <BadgeCheck className="w-10 h-10 text-white" />,
  },
  {
    title: "Prime Locations",
    description:
      "We specialize in premium locations and emerging investment zones.",
    icon: <MapPin className="w-10 h-10 text-white" />,
  },
];

// Reusable variants for the feature cards
const featureCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerStaggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16" id="why-choose-us">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Why Choose Us
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          We provide more than just property transactions — we offer peace of
          mind, transparency, and lasting value.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8"
          variants={containerStaggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-blue-600 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              variants={featureCardVariants}
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
