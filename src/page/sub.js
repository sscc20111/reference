import Header from "../assets/components/header";
import design from "../assets/image/design.png"
import year from "../assets/image/2year.png"
import thumnail_z5 from "../assets/image/thumnail_z5.png"
import uiux from "../assets/image/uiux.png"
import insta from "../assets/image/insta_01.png"

const Sub = () => {

    return(<>
    <Header></Header>
    <div className="SubWrap">
        <div className="sub">
            <div className="item item01">
                <div className="listHeader">
                    <h4>Detail Page</h4>
                    <ul>
                        <li>
                            <a href="#detail">
                                <img src={year}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={design}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={design}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={design}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={design}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={design}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={design}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={design}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={design}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={design}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={design}></img>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="item item02">
                <div className="listHeader">
                    <h4>Etc</h4>
                    <ul>
                        <li>
                            <a href="#detail">
                                <img src={thumnail_z5}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={insta}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={design}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={design}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={design}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={design}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={design}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={design}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={design}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={design}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={design}></img>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="item item03">
                <div className="listHeader">
                    <h4>UIUX</h4>
                    <ul>
                        <li>
                            <a href="#detail">
                                <img src={uiux}></img>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>)

};


export default Sub