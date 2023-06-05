import Authentication from "@/components/client/authentication";
import Popup from "@/components/client/popup";
import React from "react";

export default function page() {
  return (
    <div className="w-full flex justify-center">
      <Authentication />
      <Popup />
    </div>
  );
}
