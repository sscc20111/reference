import Header from "../assets/components/header";
import year from "../assets/image/year.png"

const Detail = () => {

    return(<>
    <Header></Header>
    <div className="DetailWrap">
        <div className="intro">
            <div>sello</div>
            <h2>2주년 이벤트</h2>
            <hr />
        </div>
        <div className="detail">
            <div className="leftbox">
                <img src={year}></img>
            </div>
            <div className="rightbox">
                <ul>
                    <li>셀로 2주년을 기념하여
                        특별한 이벤트 참여를 유도하기 위해
                        생일파티에 초대받는 컨셉의 메인 그래픽
                        디자인을 작업하였다.
                    </li>
                    <li>
                        <a>WORK SCOPE</a>
                        <a>상세페이지 디자인</a>
                    </li>
                    <li>
                        <a>Tool</a>
                        <a>Photoshop</a>
                        <a>Illustration</a>
                    </li>
                    <li className="link">
                        <a>Link</a>
                        <a href="https://sell-o.kr/events/2anniversary">https://sell-o.kr/events/2anniversary</a>    
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>)

};


export default Detail