"use client";
import { useLaunchParams } from "@telegram-apps/sdk-react";
const UserInfo = () => {
  const launchParams = useLaunchParams();
  return (
    <div>
      <div>
        <span>username:</span>
        <span>{launchParams?.initData?.user?.username}</span>
      </div>
    </div>
  );
};

export default UserInfo;
