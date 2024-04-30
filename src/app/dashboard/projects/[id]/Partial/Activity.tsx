import { Timeline } from "antd";
import Image from "next/image";

const Activity = () => {
  return (
    <div className="mt-2">
      <Timeline
        items={[
          {
            children: (
              <p className="font-semibold">Rakibul Islam Add new task</p>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Activity;
