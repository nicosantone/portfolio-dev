"use client";

import TransitionPage from "@/components/transition-page";
import MotionTransition from "@/components/transition-component";
import { motion } from "framer-motion";

import { Linkedin, Github, Instagram } from "lucide-react";
import Link from "next/link";

import { useLanguage } from "@/context/language-context";
import { translations } from "@/translations";

const ContactPage = () => {
  const { lang } = useLanguage();

  return (
    <>
      <TransitionPage />

      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">

        <MotionTransition position="bottom">
          <h1 className="mb-6 text-3xl font-bold md:text-5xl">
            {translations[lang].contact.title}{" "}
            <span className="text-[#F5741c]">
              {translations[lang].contact.highlight}
            </span>
          </h1>
        </MotionTransition>

        <MotionTransition position="bottom">
          <p className="max-w-xl mb-10 text-sm md:text-base text-white/70">
            {translations[lang].contact.description}
          </p>
        </MotionTransition>

        <MotionTransition position="bottom">
          <div className="flex items-center gap-6">

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/nicol%C3%A1s-santone-5b33b02a4/"
              className="flex items-center gap-2 px-5 py-3 transition-all duration-300 rounded-xl bg-white/10 hover:bg-[#0A66C2] hover:scale-105"
            >
              <Linkedin size={20} />
              LinkedIn
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com/nicosantone"
              className="flex items-center gap-2 px-5 py-3 transition-all duration-300 rounded-xl bg-white/10 hover:bg-black hover:scale-105"
            >
              <Github size={20} />
              GitHub
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/nico.santone/?hl=es"
              className="flex items-center gap-2 px-5 py-3 transition-all duration-300 rounded-xl bg-white/10 hover:bg-pink-600 hover:scale-105"
            >
              <Instagram size={20} />
              Instagram
            </Link>

          </div>
        </MotionTransition>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="mt-12 text-lg md:text-xl text-white/80">
            {translations[lang].contact.emailText}{" "}
            <a
              href="mailto:nicosantone.tb@gmail.com?subject=Contacto desde tu portfolio&body=Hola Nicolás, te contacto por..."
              className="font-semibold text-[#F5741c] transition-all duration-300 hover:underline hover:opacity-80"
            >
              nicosantone.tb@gmail.com
            </a>
          </p>
        </motion.div>

      </div>
    </>
  );
};

export default ContactPage;