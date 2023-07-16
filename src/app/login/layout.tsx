"use client";
import AuthLayout from "@/components/AuthLayout";
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
            <AuthLayout title="Login">
                {children} 
            </AuthLayout>            
        </Theme>
    );
};

export default LoginLayout;