"use client";

import { CTA } from "@/components/cta";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Gruha Praveshamu",
    description:
      "Traditional housewarming ritual performed to bring peace, prosperity, and positive energy into your new home.",
    image: "/images/gallery/16.jpeg", // Hindu home ceremony
  },
  {
    title: "Vivahamu",
    description:
      "Sacred Vedic wedding ceremony conducted with proper rituals to bless the couple with harmony and lifelong happiness.",
    image: "/images/gallery/7.jpeg", // Hindu wedding ritual
  },
  {
    title: "Vigraha Prathishta",
    description:
      "Divine idol installation ceremony performed with powerful mantras to energize and sanctify temples or homes.",
    image: "/images/gallery/4.jpeg", // Hindu temple idol
  },
  {
    title: "Chandi Homam",
    description:
      "Powerful fire ritual dedicated to Goddess Durga for protection, strength, and removal of negative energies.",
    image: "/images/gallery/5.jpeg", // Hindu homam fire ritual
  },
  {
    title: "Navagraha Shanthi Puja",
    description:
      "Special puja performed to balance planetary influences and remove obstacles caused by graha doshas.",
    image: "/images/gallery/3.jpeg", // Navagraha temple
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Services() {
  return (
    <div className="container mx-auto py-8 md:py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center"
      >
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Our Services
        </h1>
        <p className="text-muted-foreground container mx-auto mt-4 max-w-175">
          Services Designed for Your Journey
        </p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => (
          <motion.div key={service.title} variants={fadeIn} className="group">
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/">Enquire Now</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <CTA
        title="Need a Solution, Right Now?"
        desc="We offer solutions to meet your specific requirements. Get in touch
          with me to discuss your future."
        buttonHref="/contact"
        buttonText="Contact Us"
      />
    </div>
  );
}
