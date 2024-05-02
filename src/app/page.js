import Category from "@/components/category/Category";
import HadisContent from "@/components/hadisContent/HadisContent";
import LeftSideBar from "@/components/leftSideBar/LeftSideBar";
import NavBar from "@/components/navbar/NavBar";
import RightSideBar from "@/components/rightSideBar/RightSideBar";

export default function Home() {
  return (
    <div className="w-full max-h-scree relative">
      <NavBar />
      <div className="calc-h xss-flex md:flex justify-between">
        <div className="xss-w-full xss-left xs-left sm-l-0 md:rounded-none md-l-0 fixed right-0 left-24 h-full items-center bg-main-color justify-center lg:rounded-tl-3xl">
          <div className="px-5 md-p-rl md:pb-20 lg:pb-24 md-overflow-y md-h">
            <div className="grid gap-4 xl:gap-6 py-5 xss-pt xss-pb xs-pb sm:col-start-1 sm-pt-5 sm-pb-7 md:col-start-1 md:pb-6 md-pt-5 lg:grid-cols-1 xl:grid-cols-[350px,1fr] 2xl:grid-cols-[350px,1fr,335px] ">
              <Category />
              <HadisContent />
              <RightSideBar />
            </div>
          </div>
        </div>
        <LeftSideBar />
      </div>
    </div>
  );
}
