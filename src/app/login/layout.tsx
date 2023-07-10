"use client";
import GeneralLayout from "@/components/GeneralLayout";
import PageHead from "@/components/heads/pageHead";
import Theme from "@/themes/Theme";
import React from "react";

interface LayoutProps {
    children: React.ReactNode;
 }

const LoginLayout = ({children}: LayoutProps) => {
    return (
        <Theme>
            <PageHead />
            <GeneralLayout title="Login">
                {children} 
            </GeneralLayout>            
        </Theme>
    );
};

export default LoginLayout;