import FooterLink from "./FooterLink";



function Footer({FText, Country}) {
    return (
        <div className="absolute footer bottom-0">
            <footer className=" bg-gray-100">
                <div className="p-2.5 pl-8 pr-4">
                    <FooterLink Country="Pakistan"/>
                </div>
                <hr/>
                <div className="p-2.5 pl-4 pr-8 lg:flex md:flex lg:flex-row md:flex-col sm:flex-col justify-between">
                    <div className="flex">
                        <a href="https://about.google" target="_blank" >
                            <FooterLink FText="About"/>
                        </a>
                        <a href="https://ads.google.com/intl/en_pk/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1" target="_blank" >
                            <FooterLink FText="Advertising"/>
                        </a>
                        <a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none" target="_blank" >
                            <FooterLink FText="Business"/>
                        </a>
                        <a href="https://www.google.com/search/howsearchworks/?fg=1" target="_blank" >
                            <FooterLink FText="How Search Works"/>
                        </a>
                    </div>
                    <div className="flex">
                    <a href="https://policies.google.com/privacy?hl=en-PK&fg=1" target="_blank" >
                        <FooterLink FText="Privacy"/>
                    </a>
                    <a href="https://policies.google.com/terms?hl=en-PK&fg=1" target="_blank" >
                        <FooterLink FText="Terms"/>                    
                    </a>
                    <a href="https://about.google" target="_blank" >
                        <FooterLink FText="Settings"/>                    
                    </a>
                    </div>
                </div>
                
            </footer>            
        </div>
    )
}

export default Footer
