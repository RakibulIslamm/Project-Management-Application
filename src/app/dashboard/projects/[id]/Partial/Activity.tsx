import { Timeline } from "antd";
import Image from "next/image";

const Activity = () => {
  return (
    <div className="mt-2">
      <Timeline
        items={[
          {
            children: (
              <>
                <p className="font-semibold">Rakibul Islam Add new task</p>
                <p className="font-semibold">2015-09-01</p>
              </>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Activity;
