"use client";

import { motion } from "framer-motion";
import PageLoader from "@/components/PageLoader";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Bypass global PageLoader on pages that implement their own sport-specific loading screens
  const isSportDetailSubpage = pathname.startsWith("/sportsdetail/") && pathname !== "/sportsdetail";
  const isJoinPage = pathname === "/join";
  const hasOwnLoader = isSportDetailSubpage || isJoinPage;

  return (
    <>
      {!hasOwnLoader && <PageLoader />}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ 
          duration: 0.5, 
          ease: "easeInOut", 
          delay: hasOwnLoader ? 0 : 1.8 
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
