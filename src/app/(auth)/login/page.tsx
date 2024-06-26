"use client";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

const App: React.FC = () => {
  const router = useRouter();
  const onFinish = (values: any) => {
    // console.log("Received values of form: ", values);
    if (values.username) toast.success("Successfully logged in");
    setTimeout(() => {
      router.push("/dashboard/projects");
    }, 1000);
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold my-3">Login</h3>
      <Form
        name="normal_login"
        className="login-form w-[400px] xs:max-w-[350px]"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon py-2" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          className="mb-2"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon py-2" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked" className="mb-2">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button w-[100px] h-[40px] mr-5"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
