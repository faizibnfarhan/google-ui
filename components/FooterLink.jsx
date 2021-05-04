function FooterLink({FText, Country}) {
    return (
        <div className="text-gray-500 text-sm p-0.5 space-x-4">
            <p>{Country}</p>
            <p className="hover:underline cursor-pointer">{FText}</p>            
        </div>
    )
}

export default FooterLink
