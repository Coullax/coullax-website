"use client";

import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Image from "next/image";

import React, { Suspense, useRef, useState } from "react";
import dynamic from "next/dynamic";

const AudioToggle = dynamic(
  () => import("../AudioPlayer").then((mod) => mod.AudioToggle),
  { ssr: false }
);

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
  visible?: boolean;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}
interface NavbarLogoProps {
  logoColor?: "black" | "white";
  visible?: boolean;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn("fixed inset-x-0 top-5 z-40 w-full", className)}
    >
      {" "}
      <div className="px-6">
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(
                child as React.ReactElement<{ visible?: boolean }>,
                child.type === "div" || typeof child.type === "string"
                  ? {}
                  : { visible }
              )
            : child
        )}
      </div>
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible ? "none" : "none",
        border: visible ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-[104.027vh] flex-row items-center justify-between self-start rounded-full bg-transparent px-[10px] py-2 lg:flex dark:bg-transparent",
        visible && "bg-[#fff] dark:bg-transparent !text-black",
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              child.type === "div" || typeof child.type === "string"
                ? {}
                : { visible }
            )
          : child
      )}
    </motion.div>
  );
};

export const NavItems = ({
  items,
  className,
  onItemClick,
  visible,
}: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden mr-4 flex-1 flex-row items-center justify-end space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-2 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className={cn(
            "relative px-4 py-2 font-semibold leading-[1.557vh] font-inclusive-sans -tracking-[0.067vh]  hover:text-zinc-800",
            visible ? "text-[1.342vh]" : "text-[1.342vh]"
          )}
          key={`link-${idx}`}
          href={item.link}
          animate={{
            fontSize: visible ? "1.342vh" : "1.342vh",
          }}
          transition={{ duration: 0.3 }}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-[#f3f1e4] dark:bg-neutral-800"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </motion.a>
      ))}
      <Suspense fallback={<div className="w-5 h-5" />}>
        <AudioToggle />
      </Suspense>
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-white/80 dark:bg-neutral-950/80 !text-black",
        className
      )}
    >
      {" "}
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              child.type === "div" || typeof child.type === "string"
                ? {}
                : { visible }
            )
          : child
      )}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
  visible,
}: MobileNavHeaderProps) => {
  const passVisibleProp = (child: React.ReactNode): React.ReactNode => {
    if (React.isValidElement(child)) {
      if (
        child.type === "div" &&
        child.props &&
        typeof child.props === "object" &&
        "children" in child.props
      ) {
        // If it's a div with children, recursively pass visible to its children
        const props = child.props as { children: React.ReactNode };
        const newChildren = React.Children.map(props.children, passVisibleProp);
        return React.cloneElement(child, {}, newChildren);
      } else if (typeof child.type !== "string") {
        // If it's a React component, pass the visible prop
        return React.cloneElement(
          child as React.ReactElement<{ visible?: boolean }>,
          { visible }
        );
      }
    }
    return child;
  };

  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {React.Children.map(children, passVisibleProp)}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  theme,
  isOpen,
  visible,
  onClick,
}: {
  theme?: "white" | "black";
  isOpen: boolean;
  visible?: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <div
      className={`${
        !visible && theme === "white" ? "text-white" : "text-black"
      } dark:text-white flex items-center gap-2`}
    >
      <Suspense fallback={<div className="w-5 h-5" />}>
        <AudioToggle />
      </Suspense>
      <IconX
        className={`${
          !visible && theme === "white" ? "text-white" : "text-black"
        } dark:text-white mr-4`}
        onClick={onClick}
      />
    </div>
  ) : (
    <div
      className={`${
        !visible && theme === "white" ? "text-white" : "text-black"
      } dark:text-white flex items-center gap-2`}
    >
      <Suspense fallback={<div className="w-5 h-5" />}>
        <AudioToggle />
      </Suspense>
      <IconMenu2
        className={`${
          !visible && theme === "white" ? "text-white" : "text-black"
        } dark:text-white mr-4`}
        onClick={onClick}
      />
    </div>
  );
};

export const NavbarLogo = ({ logoColor, visible = false }: NavbarLogoProps) => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 py-1 text-sm font-normal"
    >
      {" "}
      <Image
        src={
          logoColor === "white" && !visible ? "/logo-light.png" : "/logo.png"
        }
        alt="logo"
        width={226}
        height={24.6}
        className="cursor-pointer w-[15.235vh] h-[2.349vh]"
        priority
        unoptimized
      />
    </a>
  );
};

interface NavbarButtonProps {
  href?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
  onClick?: () => void;
  target?: string;
}

export const NavbarButton = ({
  href,
  children,
  className,
  variant = "primary",
  onClick,
  target,
  ...props
}: NavbarButtonProps) => {
  const baseStyles =
    "px-6 py-2 rounded-full bg-[#000] button bg-black text-white text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-white text-back shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  const combinedClassName = cn(baseStyles, variantStyles[variant], className);

  if (href) {
    return (
      <a href={href} target={target} className={combinedClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
