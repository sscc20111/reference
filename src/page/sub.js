import Header from "../assets/components/header";
import { getProjectsSubData } from "../assets/js/projects_data";
import { Link } from "react-router";


const Sub = () => {

    return(<>
    <Header></Header>
    <div className="SubWrap">
        <div className="sub">
            <div className="item item01">
                <div className="listHeader">
                    <h4>Detail Page</h4>
                    <ul>
                        {getProjectsSubData.Detail.map((item, index) => (
                            <li key={index}>
                                <p>{item.title}</p>
                                <Link to={`/detail`} state={{title: item.title}} >
                                    <img src={item.src}></img>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="item item02">
                <div className="listHeader">
                    <h4>Etc</h4>
                    <ul>
                        {getProjectsSubData.etc.map((item, index) => (
                            <li key={index}>
                                <a href="#detail">
                                    <img src={item.src}></img>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="item item03">
                <div className="listHeader">
                    <h4>UIUX</h4>
                    <ul>
                        {getProjectsSubData.UIUX.map((item, index) => (
                            <li key={index}>
                                <a href="#detail">
                                    <img src={item.src}></img>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>)

};


export default Sub