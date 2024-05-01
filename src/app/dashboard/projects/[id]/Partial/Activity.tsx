import { Timeline } from "antd";

const Activity = ({ activities }: { activities: string[] }) => {
  return (
    <div className="mt-2">
      <Timeline
        items={activities.map((acticity) => ({
          children: (
            <>
              <p className="font-semibold">{acticity}</p>
              {/* <p className="font-semibold">2015-09-01</p> */}
            </>
          ),
        }))}
      />
    </div>
  );
};

export default Activity;
