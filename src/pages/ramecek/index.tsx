import {Fragment} from "react";
import {NextPage} from "next";
import PhotoFrameEditor from "../../components/PhotoFrameEditor/PhotoFrameEditor";

const FramePage: NextPage = () => {
    return (<Fragment>
        <ul className="aktuality__list">
            <li className="aktuality__list-item">
                <div className="aktualita-card__text-container">
                    <h2 className="heading-secondary aktualita-card__heading">Editor profilové fotky s rámečkem</h2>
                    <div className="aktualita-card__message">
                        Nahrajte svojí fotku, upravte velikost a umístění a stáhněte si hotovou fotku s naším rámečkem
                    </div>
                    <PhotoFrameEditor frameSrc="/images/FB_frame.png"/>
                </div>
            </li>
        </ul>
    </Fragment>);
};
export default FramePage;