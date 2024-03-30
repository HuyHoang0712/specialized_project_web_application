"use client";
import React, { useState } from "react";
const ProfileHeader = () => {
  return (
    <div className="flex items-stretch justify-between p-3" aria-label="Global">
      <div className="flex-1 w-32 text-lg text-black-60 font-medium">
        Account
      </div>
      <div className="flex-3 w-32">Button</div>
    </div>
  );
};

export default ProfileHeader;
