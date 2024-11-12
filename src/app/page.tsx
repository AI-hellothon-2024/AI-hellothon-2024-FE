import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-full gap-10 bg-pink-50">
      <div className="flex-grow flex flex-col gap-8">
        <div className="flex-grow bg-red-100 flex-center">hero</div>
        <Link href={"/steps/1"} className="mx-10 bg-gray-200 py-6 text-center">
          플레이
        </Link>
      </div>
      <footer className="flex self-center bg-blue-100 w-full py-4 justify-center">
        footer
      </footer>
    </div>
  );
}
