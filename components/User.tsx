"use client";
import { User, useInitData } from "@tma.js/sdk-react";
const UserInfo = () => {
  const initData = useInitData(true);
  return (
    <div>
      <div>
        <span>username:</span>
        <span>{initData?.user?.username}</span>
      </div>
    </div>
  );
};

export default UserInfo;
