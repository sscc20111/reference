import Header from "../assets/components/header";
import { useLocation } from 'react-router-dom'
import { getProjectsDitailData } from "../assets/js/projects_data";
const Detail = () => {
    const location = useLocation();
    const test1 = location.state.title;

    return(<>
    <Header></Header>
    <div className="DetailWrap">
        <div className="intro">
            <div>sello</div>
            <h2>{getProjectsDitailData(test1).title}</h2>
            <hr />
        </div>
        <div className="detail">
            <div className="leftbox">
                <img src={getProjectsDitailData(test1).src}></img>
            </div>
            <div className="rightbox">
                <ul>
                    <li>
                        <p>{getProjectsDitailData(test1).text1}</p>
                    </li>
                    <li>
                        <h3>WORK SCOPE</h3>
                        <p>{getProjectsDitailData(test1).text2}</p>
                    </li>
                    <li>
                        <h3>Tool</h3>
                        {getProjectsDitailData(test1).text3.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </li>
                    <li className="link">
                        <a href={getProjectsDitailData(test1).link}>링크</a>    
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>)

};


export default Detail