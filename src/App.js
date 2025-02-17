import logo from "./assets/image/logo.png";
import "./css/App.css";
import "./css/common.css"
import "./css/sub.css"
import loop from "./assets/js/loop";
import design from "./assets/image/design.png"
import mail from "./assets/image/mail.png"
import insta from "./assets/image/Insta.png"
import call from "./assets/image/call.png"
import { useEffect } from "react";


import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


function App() {
  useEffect(() => {
    loop();
    test()
  }, []);
  const test = () => {
    console.log('test');
    gsap.to('.box', {
      scrollTrigger: {
        trigger: ".box", // 스크롤 트리거 대상
        // pin: true,
        start: "top center",   // 트리거가 화면의 80% 지점에 도달했을 때
        toggleClass: "test" // test 클래스 추가/제거
      }
  });
  }

  return (
    <div className="App">
      <header className="App-header">
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
      <main>
        <section className="section section01">
          <div className="inner">
          <div>
            {/* <div className='imgBox'></div> */}
            <div className="textBox">
              <p>
                잉크와 픽셀의 조화로 <br></br>
                {/* <p></p> 태그 안에 <div>태그가 있으면 안됩니다! (br로 줄넘김, ) */}
                창의적인 디자인을 구현하는 디자이너
                {/* <p></p> 태그 안에 <div>태그가 있으면 안됩니다! (br로 줄넘김, ) */}
              </p>
              <h4>
                <img src={logo} alt="로고" />
              </h4>
            </div>
          </div>
          </div>
        </section>
        <section className="section section02">
          <div>
            <div className="leftBox">
            <div className="inner">
              <div className="textBox">
                <div className="intro">About me</div>
                <p>Since 1992</p>
                <p>Various Experiences such as music & tattoos</p>
                <p>Artistic specialized designer</p>
              </div>
              <div className="backgroundBox">
                <div className="cover">
                <figure></figure>
                <figure></figure>
                </div>
              </div>
              </div>
            </div>
            <div className="rightBox">
            <div className="inner">
              <div className="listBox">
                <ul>
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
                      <span>2022~2025</span>
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
              </div>
              <div className="iconBox">
                <div className="carousel-track"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section03">
        <div className="inner">
        <div>
            <div className="topBox">
                <div className="smalltxt">Contact</div>
                <p>I Can Build</p>
                <p>Something Greater,</p>
                <p className="box"><img src={design} alt="작은이미지" />Together.</p>
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
         </div>  
        </section>
      </main>
    </div>
  );
}

export default App;
