import React from 'react'
import Logo from '../images/logo-it.png'
import BG01 from '../images/technology_bg.png'

const BannerTop = () => {
    return (
        <div className="BannerTop bg-light">
            <div className="row m-auto p-2 pt-4"
                style={{'background' : `url(${BG01})`,
                        'backgroundSize': 'contain',
                        'backgroundRepeat': 'no-repeat'}}>
                
                <div style={{'background'        : `url(${Logo})`,
                    'height'                : '90px',
                    'width'                 : '100%',
                    'backgroundRepeat'      : 'no-repeat',
                    'backgroundPosition'    : 'left center',
                    'backgroundSize'        : 'contain'}}></div>
            </div>
            <div className="row m-0 p-0 bg-ou">
                <div className="text-light pl-3 p-1">
                    <i className="fa fa-phone-square"></i> <a href="# " className="text-light"> (84-028) 3838.6603</a>
                    <span className="text-secondary pr-2 pl-2">|</span>
                    <i className="fa fa-envelope"></i> <a href="# " className="text-light">fcs@ou.edu.vn</a>
                </div>
            </div>
        </div>
    )
}

export default BannerTop