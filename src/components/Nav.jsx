import React, { Component } from 'react'
import SearchBox from './SearchBox'

class Nav extends Component {

    toggleMenu = () => {
        let navigation = document.querySelector('.navigation')
        navigation.classList.toggle('active')

        let toggle = document.querySelector('.toggle')
        toggle.classList.toggle('active')
    }

    render () {
        return (
            <div className="Nav bg-dark text-light">
                <div className="navCtrl">
                    <a href="# " className="toggle btn btn-secondary m-2" onClick={this.toggleMenu}> MENU</a>
                    <a href="/" className="btn btn-primary m-2"><i className="fa fa-home"></i></a>
                    <a href="# " className="btn btn-info m-2" title="Tài khoản"><i className="fa fa-user-circle"></i> Tài khoản</a>
                </div>
                <div className="searchForm">
                    <SearchBox />
                </div>
                <div className="navigation">
                    <ul>
                        <li>
                            <a href="# ">
                                <span className="icon"><i className="fa fa-address-card"></i></span>
                                <span className="title">Giới thiệu</span>
                            </a>
                        </li>
                        <li>
                            <a href="# ">
                                <span className="icon"><i className="fa fa-rss"></i></span>
                                <span className="title">Tin tức</span>
                            </a>
                        </li>
                        <li>
                            <a href="# ">
                                <span className="icon"><i className="fa fa-cogs"></i></span>
                                <span className="title">Hoạt động</span>
                            </a>
                        </li>
                        <li>
                            <a href="# ">
                                <span className="icon"><i className="fa fa-cloud-download"></i></span>
                                <span className="title">Biểu mẫu</span>
                            </a>
                        </li>
                        <li>
                            <a href="# ">
                                <span className="icon"><i className="fa fa-globe"></i></span>
                                <span className="title">Liên hệ</span>
                            </a>
                        </li>
                        {/* <div className="text-center" id="btnCloseMenu">
                            <button className="btn btn-danger btn-sm">&times;</button>
                        </div> */}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav