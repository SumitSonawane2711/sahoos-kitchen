import Link from "next/link";
import Image from "next/image"; // Next.js Image component for optimized images
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string; // Tailwind classes for the logo container
  textClassName?: string; // Tailwind classes specifically for the text
  imageClassName?: string; // Tailwind classes specifically for the image
}

export function Logo({ className, textClassName, imageClassName }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("flex items-center space-x-2", className)} // Flex to align image and text
    >
      {/* Logo Image */}
      <Image
        src="/logo.png" // Path to the logo image in public/
        alt="Sahoos Kitchen Logo"
        width={40} // Adjust based on your image size
        height={40}
        priority // Add priority flag to fix LCP warning
        className={cn("h-28 w-28", imageClassName)} // Default size, customizable via props
      />
      {/* Logo Text */}
      {/* <span
        className={cn(
          "text-2xl font-bold tracking-wide",
          textClassName // Allow custom text styling
        )}
      >
        Sahoos Kitchen
      </span> */}
    </Link>
  );
}