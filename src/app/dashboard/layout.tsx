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

const { Header, Sider, Content } = Layout;

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const path = usePathname();
  console.log(path);

  return (
    <Layout hasSider>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="px-3 my-2 text-white text-xl font-bold">
          <h2>LOGO</h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[path]}
          items={[
            {
              key: "/dashboard",
              icon: (
                <Link href={"/dashboard"}>
                  <HomeOutlined />
                </Link>
              ),
              label: "Home",
            },
            {
              key: "/dashboard/projects",
              icon: (
                <Link href={"/dashboard/projects"}>
                  <FaBriefcase />
                </Link>
              ),
              label: "Projects",
            },
          ]}
        />
      </Sider>
      <Layout className="ml-[200px]">
        <Content
          style={{
            margin: "24px 16px",
            padding: 0,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
