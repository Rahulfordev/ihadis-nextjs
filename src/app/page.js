import LeftSideBar from "@/components/leftSideBar/LeftSideBar";
import NavBar from "@/components/navbar/NavBar";

export default function Home() {
  return (
    <div className="w-full max-h-screen bg-white relative">
      <NavBar />
      <div className="justify-between calc-h md:flex">
         <LeftSideBar />
      </div>
    </div>
  );
}
