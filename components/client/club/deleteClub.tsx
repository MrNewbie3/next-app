"use client";
import { instance } from "@/config/axios";
import React from "react";
import { FaTrash } from "react-icons/fa";

type PageProps = {
  id: string;
  name: string;
};

function DeleteClub({ id, name }: PageProps) {
  const handleClick = (params: PageProps) => {
    const agreed = confirm("Are you sure want to delete: " + params.name + "?");
    if (agreed) {
      instance
        .delete("club/" + id)
        .then((result: any) => {
          typeof window != "undefined" ? window.location.reload() : undefined;
        })
        .catch((err: any) => {
          alert("failed to delete: " + err);
          return alert("try again");
        });
    }
  };
  return (
    <button
      className="text-red-500"
      onClick={() => {
        handleClick({ id, name });
      }}
    >
      <FaTrash />
    </button>
  );
}
export default DeleteClub;
