import { Mail } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Globe } from "lucide-react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
const Tabs = () => {
  return (
    

<div className="border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
    <ul className="hidden md:flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
    <li className="me-2">
            <a href="#" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <Mail className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true"/>
                sales@filmrent.net
            </a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                <Phone className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true"/>
               +234 703 117 99
            </a>
        </li>
    </ul>
    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li className="me-2">
            <a href="#" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
             Login
            </a>
        </li>
        <li className="me-2">
            <a href="#" className="hidden md:inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                Sign Up
            </a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <ShoppingCart className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true"/>
                <p className="hidden md:inline-block">Cart
                Cart
                </p>
            </a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
            <FaWhatsapp className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true"/>
            </a>
        </li>
        <li>
            <a className="flex items-center p-4 text-gray-400 rounded-t-lg  dark:text-gray-500">
            <Globe className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true"/>
            <DropdownMenu>
            <DropdownMenuTrigger>
                <MdOutlineKeyboardArrowDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuSeparator />
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>AR</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>

            </a>
        </li>
    </ul>
</div>

  )
}

export default Tabs