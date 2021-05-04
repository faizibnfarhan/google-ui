function HeaderLink({HText, Icon}) {
    return (
        <div className="flex flex-row justify-evenly items-center text-gray-600 cursor-pointer text-sm">
            <p className="text-xl p-2 focus:bg-gray-100 hover:bg-gray-100 rounded-full">{Icon}</p>
            <p className="-ml-3 hover:underline">{HText}</p>            
        </div>
    )
}

export default HeaderLink
