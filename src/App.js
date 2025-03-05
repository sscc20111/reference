import { useEffect } from "react";
import { gsap } from "gsap";

import {loop} from "./assets/js/loop";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./css/App.css";
import "./css/common.css"
import "./css/sub.css"

import logo from "./assets/image/logo.svg";
import design from "./assets/image/design.png"
import mail from "./assets/image/mail.png"
import insta from "./assets/image/Insta.png"
import call from "./assets/image/call.png"
import backgroundImg1 from "./assets/image/tattoo&design.png"
import backgroundImg2 from "./assets/image/ai_03.png"


gsap.registerPlugin(ScrollTrigger);
function App() {
  useEffect(() => {
    loop();
    animation();
  }, []);

  const animation = () => {

    gsap.timeline({ //background 따라오기 기능
      scrollTrigger: {
          trigger: '.section02',
          // markers: true,
          start: "top 80",
          end: "bottom bottom",
          pin: '.gsap_pin',
      }
    });

    gsap.timeline({ //background animation 기능
        scrollTrigger: {
            trigger: '.section02',
            // markers: true,
            start: "top +=80%",
            end: "bottom center",
            onUpdate: self => {
                const paddingProgress = Math.min(self.progress, 0.1) * (64 / 0.1);// 0 ~ 0.1값을 0 ~ 64px(inner padding)로 변환
                document.documentElement.style.setProperty('--padding', `${paddingProgress}px`);
                
                if(self.progress >= 0.1){ //padding 모션이 끝난시점 0.1
                  const opacityProgress = Math.min((self.progress - 0.1) * 5, 0.6);// Math.min
                  const scaleProgress = Math.min((self.progress - 0.1), 0.05);// padding 모션이 끝난후 opacity 시작 (0.05 => 임계값)
                  document.documentElement.style.setProperty('--cover_opacity', `${opacityProgress}`);
                  document.documentElement.style.setProperty('--scale', `${scaleProgress+1}`);
                }
                
                if(self.progress >= 0.6){
                  const opacityProgress = Math.min((self.progress - 0.6) * 6, 1);//60% 진행후 실행
                  document.documentElement.style.setProperty('--fadeOut', `${opacityProgress}`);

                }
            }
        }
    });



    gsap.timeline({ //background 따라오기 기능
      scrollTrigger: {
        trigger: '.section03 .topBox',
        // markers: true,
        start: "top center",
        end: "bottom center",
        onEnter: () => document.querySelector('.section03 .topBox').classList.add('active'),
      }
    });

}


  return (
    <div className="App">
    {/*  <==============### header 시작 ###==============>  */}
      <header className="header">
        <a>
          <h2 className="logo">
            <img src={logo} alt="로고"/>
          </h2>
        </a>
        <div className="nav">
            <a href="nav1">Home</a>
            <a href="nav2">Work</a>
            <a href="nav3">Contact</a>
        </div>
      </header>
    {/*  <==============### header 끝 ###==============>  */}



    {/*  <==============### main 시작 ###==============>  */}
      <main className="main">
        <section className="section section01">
          <div className="inner">
              <div className="textBox">
                <p>잉크와 픽셀의 조화로 <br></br>창의적인 디자인을 구현하는 디자이너</p>
                <h4>
                  <img src={logo} alt="로고" />
                </h4>
            </div>
          </div>
        </section>

        <section className="section section02">
          <div className="inner">
            <div className="contents content01">
              <div className="textBox">
                <h4>About me</h4>
                <p>Since 1992</p>
                <p>Various Experiences such as music & tattoos</p>
                <p>Artistic specialized designer</p>
              </div>
              <ul className="info">
                <li>
                  <div className="leftBox">
                    <p>학력</p>
                    <span>2007~2022</span>
                  </div>
                  <div className="rightBox">
                    <p>서울광성고등학교</p>
                    <span>숭실대학교 GFI 시각디자인학 전공</span>
                  </div>
                </li>
                <li>
                  <div className="leftBox">
                    <p>경력</p>
                    <span>2023~2025</span>
                  </div>
                  <div className="rightBox">
                    <p>코드크래프트 디자인팀</p>
                    <span>중고폰 플랫폼 "셀로"의 전반적인 디자인 담당</span>
                  </div>
                </li>
                <li>
                  <div className="leftBox">
                    <p>자격증</p>
                    <span>2021~2025</span>
                  </div>
                  <div className="rightBox">
                    <p id="vd">시각디자인 산업기사</p>
                    <span>AI 프롬프트 디자이너 2급</span>
                  </div>
                </li>
                <li>
                  <div className="leftBox">
                    <p>공모전</p>
                    <span>2020~2022</span>
                  </div>
                  <div className="rightBox">
                    <p>강원디자인공모전 입선</p>
                    <span>
                      강원도의 천문대 및 dmz를 주제로 타투 스티커 디자인
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="gsap_pin">
              <div className="background">
                <div className="cover"></div>
                <img src={backgroundImg1}></img>
                <img className="fadeOut" src={backgroundImg2}></img>
              </div>
            </div>
          </div>
          <div className="contents content02">
            <div className="carousel-track"></div>
          </div>
        </section>

        <section className="section section03">
          <div className="inner">
            <div className="topBox">
                <div className="smalltxt">Contact</div>
                <p><span>I Can Build</span></p>
                <p><span>Something Greater,</span></p>
                <p className="box"><span><img src={design} alt="작은이미지" />Together.</span></p>
            </div>
            <div className="btmBox">
              <div className="info">
                <p><img src={mail} alt="icon" />dlckdrb6176@gmail.com</p>
                <p><img src={insta} alt="icon" />aggie_0123</p>
                <p><img src={call} alt="icon" />010-2816-6176</p>
              </div>
                <a href="Board">Get on Board</a>
            </div>
          </div>  
        </section>
      </main>
    {/*  <==============### main 끝끝 ###==============>  */}

    </div>
  );
}

export default App;
