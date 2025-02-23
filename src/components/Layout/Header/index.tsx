import logo from "../../../assets/logo.png";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full bg-transparent shadow z-10 h-16 flex justify-center items-center">
      <div className="container mx-auto px-8 flex flex-row justify-between">
        <div className="flex flex-row space-x-2 items-center">
          <img src={logo} alt="GardenPokhara" width={34} height={34} />
          <p className="font-montserrat text-xs">
            <strong>Garden</strong>Pokhara
          </p>
        </div>
        <div className="flex flex-row space-x-6 justify-center items-center">
          <Search height={30} width={30} className="cursor-pointer" />
          <div className="flex flex-col space-y-2 items-end cursor-pointer">
            <div className="w-8 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black "></div>
            <div className="w-8 h-0.5 bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
