import React from "react";
import BasicInfoForm from "./form-component/BasicInfoForm";

export default function ShareForm() {
  return (
    <>
      <div className="w-4/5 flex flex-col justify-center items-center gap-6  bg-white shadow-lg">
        <BasicInfoForm />
      </div>
    </>
  );
}
