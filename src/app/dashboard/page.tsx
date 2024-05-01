import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  redirect("/dashboard/projects");
  return <div>This is dashboard</div>;
};

export default page;
