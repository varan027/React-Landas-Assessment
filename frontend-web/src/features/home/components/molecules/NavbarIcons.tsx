import IconButton from "../../../../shared/components/IconButton";
import { HiShoppingCart } from "react-icons/hi";
import { HiMiniUser } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";



const NavbarIcons = () => {
  return (
    <div className="flex items-center space-x-1">
      <IconButton icon={HiShoppingCart} />
      <IconButton icon={HiMiniUser} />
      <IconButton icon={IoSearch} />
      
      <span className="text-white text-xs pl-2">로그아웃</span>
    </div>
  );
};

export default NavbarIcons;
