import Link from "next/link";

const NabBar = () => {
  return (
    <div className="flex justify-between items-center bg-[#635BFF29] h-20 px-10 rounded-md mx-auto">
      <h2 className="text-2xl font-semibold text-white">
        <span className="text-blue-400">Planet</span>
        <span className="text-green-400">Restore</span>
      </h2>
      <div>
        <ul className="flex gap-3 items-center">
          <li>
            <Link href={"/"}>Disaster</Link>
          </li>
          <li>
            <Link href={"/"}>Organization</Link>
          </li>
          <li>
            <Link href={"/"}>About Us</Link>
          </li>
          <li>
            <Link href={"/"}>Blog</Link>
          </li>

          <button className="bg-black text-white px-3 py-2 rounded-md flex items-center justify-center gap-1">
            Contact us{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3.0}
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default NabBar;
