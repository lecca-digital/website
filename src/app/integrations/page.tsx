import { useState } from "react";

export default function Integrations() {
  return (
    <div className="flex justify-center w-full mt-4">
      <section className="max-w-6xl w-full px-4 sm:px-8">
        <iframe
          src="https://app.lecca.io/public/apps"
          className="w-full h-screen py-20"
        />
      </section>
    </div>
  );
}
