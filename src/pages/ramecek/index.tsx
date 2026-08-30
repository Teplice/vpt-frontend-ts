import {Fragment} from "react";
import {NextPage} from "next";
import PhotoFrameEditor from "../../components/PhotoFrameEditor/PhotoFrameEditor";

const FramePage: NextPage = () => {
    return (<Fragment>
        <ul className="aktuality__list">
            <li className="aktuality__list-item">
                <div className="aktualita-card__text-container">
                    <h2 className="heading-secondary aktualita-card__heading">Editor profilové fotky pro sociální sítě s rámečkem</h2>
                    <div className="aktualita-card__message">Vytvořte si profilovou fotku pro Facebook nebo Instagram s rámečkem Volby pro Teplice a podpořte nás!
                    </div>
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