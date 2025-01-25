import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a>
          <h2 className="logo">{<img src="./changgyu.png" />}</h2>
          <div className="nav">
            <div>Home</div>
            <div>Work</div>
            <div>Contact</div>
          </div>
        </a>
      </header>
      <main>
        <section className="section section01">
          <div>
            {/* <div className='imgBox'></div> */}
            <div className="textBox">
              <p>
                <div>잉크와 픽셀의 조화로</div>
                <div>창의적인 디자인을 구현하는 디자이너</div>
              </p>
              <h4>{<img src="./changgyu.png" />}</h4>
            </div>
          </div>
        </section>
        <section className="section section02">
          <div>
            <div className="leftBox">
              <span>test</span>
              <p>About me</p>
              <p>Since 1992</p>
              <p>Various Experiences such as music & tattoos</p>
              <p>Artistic specialized designer</p>
            </div>
            <div className="rightBox">
              <div>
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
                      <p>시각디자인 산업기사</p>
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
                  {/* <li>
                    <div className="leftBox">
                      <p>Nisi do occaecat</p>
                      <span>Tempor nulla nulla duis irure occaecat.</span>
                    </div>
                    <div className="rightBox">
                      <p>1424</p>
                      <span>KRW Billion</span>
                    </div>
                  </li>
                  <li>
                    <div className="leftBox">
                      <p>Nisi do occaecat</p>
                      <span>Tempor nulla nulla duis irure occaecat.</span>
                    </div>
                    <div className="rightBox">
                      <p>1424</p>
                      <span>KRW Billion</span>
                    </div>
                  </li>
                  <li>
                    <div className="leftBox">
                      <p>Nisi do occaecat</p>
                      <span>Tempor nulla nulla duis irure occaecat.</span>
                    </div>
                    <div className="rightBox">
                      <p>1424</p>
                      <span>KRW Billion</span>
                    </div>
                  </li>
                  <li>
                    <div className="leftBox">
                      <p>Nisi do occaecat</p>
                      <span>Tempor nulla nulla duis irure occaecat.</span>
                    </div>
                    <div className="rightBox">
                      <p>1424</p>
                      <span>KRW Billion</span>
                    </div>
                  </li>
                  <li>
                    <div className="leftBox">
                      <p>Nisi do occaecat</p>
                      <span>Tempor nulla nulla duis irure occaecat.</span>
                    </div>
                    <div className="rightBox">
                      <p>1424</p>
                      <span>KRW Billion</span>
                    </div>
                  </li>
                  <li>
                    <div className="leftBox">
                      <p>Nisi do occaecat</p>
                      <span>Tempor nulla nulla duis irure occaecat.</span>
                    </div>
                    <div className="rightBox">
                      <p>1424</p>
                      <span>KRW Billion</span>
                    </div>
                  </li>
                  <li>
                    <div className="leftBox">
                      <p>Nisi do occaecat</p>
                      <span>Tempor nulla nulla duis irure occaecat.</span>
                    </div>
                    <div className="rightBox">
                      <p>1424</p>
                      <span>KRW Billion</span>
                    </div>
                  </li>
                  <li>
                    <div className="leftBox">
                      <p>Nisi do occaecat</p>
                      <span>Tempor nulla nulla duis irure occaecat.</span>
                    </div>
                    <div className="rightBox">
                      <p>1424</p>
                      <span>KRW Billion</span>
                    </div>
                  </li>
                  <li>
                    <div className="leftBox">
                      <p>Nisi do occaecat</p>
                      <span>Tempor nulla nulla duis irure occaecat.</span>
                    </div>
                    <div className="rightBox">
                      <p>1424</p>
                      <span>KRW Billion</span>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section section03">
          <div className="image-box"></div>
        </section>
      </main>
    </div>
  );
}

export default App;
