"use client";
import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const transition = {
    type: "spring" as const,
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    children,
    href,
    className,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
    href?: string;
    className?: string;
}) => {
    return (
        <div onMouseEnter={() => setActive(item)} className="md:relative ">
            {href ? (
                <Link to={href}>
                    <motion.p
                        transition={{ duration: 0.3 }}
                        className={cn("cursor-pointer text-white hover:opacity-[0.9]", className)}
                    >
                        {item}
                    </motion.p>
                </Link>
            ) : (
                <motion.p
                    transition={{ duration: 0.3 }}
                    className={cn("cursor-pointer text-white hover:opacity-[0.9]", className)}
                >
                    {item}
                </motion.p>
            )}

            {active !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                >
                    {active === item && (
                        <div className="absolute top-[100%] left-1/2 transform -translate-x-1/2 pt-6 w-max">
                            <motion.div
                                transition={transition}
                                className="bg-[#0B1B2F] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl"
                            >
                                <motion.div
                                    className="w-max h-full p-4"
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

import { cn } from "../lib/utils";

export const Menu = ({
    setActive,
    children,
    className,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)} // resets the state
            className={cn("md:relative rounded-full border border-white/20 bg-plk-navy/50 backdrop-blur-sm shadow-input flex justify-center space-x-4 md:space-x-8 px-4 md:px-8 py-3 ", className)}
        >
            {children}
        </nav>
    );
};

export const ProductItem = ({
    title,
    description,
    href,
    src,
}: {
    title: string;
    description: string;
    href: string;
    src: string;
}) => {
    return (
        <a href={href} className="flex space-x-2">
            <img
                src={src}
                width={140}
                height={70}
                alt={title}
                className="shrink-0 rounded-md shadow-2xl"
            />
            <div>
                <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
                    {title}
                </h4>
                <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
                    {description}
                </p>
            </div>
        </a>
    );
};

export const HoveredLink = ({ children, href, ...rest }: any) => {
    return (
        <Link
            to={href}
            {...rest}
            className="text-white/80 hover:text-plk-lima transition-colors"
        >
            {children}
        </Link>
    );
};
