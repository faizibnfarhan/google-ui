import HeaderLink from "./HeaderLink"
import {CgMenuGridO} from 'react-icons/cg'
import {FaUserCircle} from 'react-icons/fa'
import {RiLogoutCircleRLine} from 'react-icons/ri'
import { Avatar } from "@material-ui/core"


function Header({Icon, HText}) {
    return (
        <div className="p-3">
            <header className="flex mr-2 justify-between">
                <div className="flex">
                    <p className="focus:outline-none text-red-500 hover:text-red-800 cursor-pointer text-2xl"><RiLogoutCircleRLine/></p>
                </div>
                <div className="flex space-x-4 items-center flex-row">
                    <a href="https://gmail.com" target="_blank">
                        <HeaderLink HText="Gmail" Icon=""/>
                    </a>
                    <a href="https://www.google.com.pk/imghp?hl=en&ogbl">
                        <HeaderLink HText="Images" Icon=""/>
                    </a>
                    <HeaderLink HText="" Icon={<CgMenuGridO/>}/>
                    <div className="transform rounded-full p-1 transition focus:bg-gray-100 hover:bg-gray-100 cursor-pointer ease-in duration-100 hover:scale-90">
                        <Avatar className="rounded-full shadow-sm p-1 w-10 h-10" src="https://legiit-user.s3.amazonaws.com/6278beac6c3ae5fa0c9f999e787d1573/c7eb7673e3a21c651070489a539e0f7f.png"/>
                    </div>
                </div>
            </header>         
        </div>
    )
}

export default Header


