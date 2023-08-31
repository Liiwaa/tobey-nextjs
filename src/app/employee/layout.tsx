"use client";
import PageHead from "@/components/heads/pageHead";
import Theme from "@/themes/Theme";
import React from "react";

interface LayoutProps {
    children: React.ReactNode;
 }

const EmployeeLayout = ({children}: LayoutProps) => {
    return (
        <Theme>
            <PageHead />
            {children}         
        </Theme>
    );
};

export default EmployeeLayout;