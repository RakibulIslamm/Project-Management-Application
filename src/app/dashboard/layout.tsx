"use client";
import React, { ReactNode, useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

const { Header, Sider, Content } = Layout;

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const path = usePathname();
  // console.log(path);

  return (
    <div className="w-full min-h-screen max-w-[1920px] mx-auto">
      <Layout className="min-h-screen relative">{children}</Layout>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default DashboardLayout;
