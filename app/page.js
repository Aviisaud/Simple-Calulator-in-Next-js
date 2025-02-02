import Calculator from "../components/Calculator";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-5">Next.js Calculator</h1>
      <Calculator />
    </div>
  );
}