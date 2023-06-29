"use client";

import Link from "next/link";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  const reloadPage = () => {
    reset();
    return typeof window != undefined ? window.location.reload() : undefined;
  };
  return (
    <html>
      <body>
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
            <Link href={"/main"}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={reloadPage}>
                Reload Page
              </button>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
