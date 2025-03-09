import Header from "../assets/components/header";
import design from "../assets/image/design.png"
import year from "../assets/image/2year.png"
import epilogue from "../assets/image/epilogue.png"
import recomment from "../assets/image/recomment.png"
import iphone from "../assets/image/iphone16.png"
import z6 from "../assets/image/z6.png"
import s24FE from "../assets/image/s24fe.png"
import sc from "../assets/image/sc.png"
import ai from "../assets/image/ai.png"
import box from "../assets/image/boxing.png"
import subtract from "../assets/image/subtract.png"
import booqoo from "../assets/image/booqoo.png"
import toss01 from "../assets/image/toss01.png"
import toss02 from "../assets/image/toss02.png"
import retro from "../assets/image/retro.png"
import clean from "../assets/image/clean.png"
import thumnail_z5 from "../assets/image/thumnail_z5.png"
import thumnail_dog from "../assets/image/thumnail_dog.png"
import price from "../assets/image/z5_price.png"
import insta from "../assets/image/insta_01.png"
import uiux from "../assets/image/uiux.png"



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
                                <img src={epilogue}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={recomment}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={iphone}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={z6}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={s24FE}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={sc}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={ai}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={box}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={subtract}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={booqoo}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={toss01}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={toss02}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={retro}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={clean}></img>
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
                                <img src={thumnail_dog}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={price}></img>
                            </a>
                        </li>
                        <li>
                            <a href="#detail">
                                <img src={insta}></img>
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