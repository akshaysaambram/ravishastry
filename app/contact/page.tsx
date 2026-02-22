"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  MailIcon,
  MapPinIcon,
  MessageCircleWarningIcon,
  PhoneIcon,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <div className="container mx-auto py-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Contact Us
        </h1>
        <p className="text-muted-foreground mt-4">Get in touch</p>
      </motion.div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Find us at our office or reach out directly
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPinIcon className="text-primary size-5" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-muted-foreground text-sm">
                    Plot No 227, Near Hastinapuri Post Office, 8th Cross
                    <br />
                    Sainikpuri, Hyderabad
                    <br />
                    Telangana 500094
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPinIcon className="text-primary size-5" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-muted-foreground text-sm">
                    Ramapuram (v), Vaddepally (M), Jogulamba Gadwal (D)
                    <br />
                    Telangana 500094
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <PhoneIcon className="text-primary size-5" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a
                    href="tel:9160169108"
                    className="text-muted-foreground text-sm"
                  >
                    91601 69108
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MessageCircleWarningIcon className="text-primary size-5" />
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <a
                    href="https://wa.me/9160169108"
                    className="text-muted-foreground text-sm"
                  >
                    91601 69108
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.3426723115444!2d78.54014004892085!3d17.489809500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b129ca3b50d%3A0x3f7eeeda311380c9!2sSainikpuri%20Post%20Office!5e0!3m2!1sen!2sin!4v1771759345700!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "6px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  );
}
