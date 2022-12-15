import React from "react";

const Footer = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <a href="" className="mx-1"><img src={"images/facebook.svg"} alt={"Facebook"} width={24} /></a>
                    <a href="" className="mx-1"><img src={"images/twitter.svg"} alt={"Twitter"} width={24} /></a>
                    <a href="" className="mx-1"><img src={"images/instagram.svg"} alt={"Instagram"} width={24} /></a>
                    <a href="" className="mx-1"><img src={"images/youtube.svg"} alt={"YouTube"} width={24} /></a>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-12 text-center">
                    <p>Copyright © 2022 Celuland. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;