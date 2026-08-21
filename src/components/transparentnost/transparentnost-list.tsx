import {TransparencyDoc} from "../../interfaces/models";
import TransparentnostTable from "./transparentnost-table";

interface TransparentnostPageProps {
    transparencyItems: TransparencyDoc[];

}

const TransparentnostList: React.FC<TransparentnostPageProps> = ({transparencyItems}) => {

    return (
        <section>
            <ul className="aktuality__list">
                <li className="aktuality__list-item">
                    <div className="aktualita-card__text-container">
                        <h2 className="heading-secondary aktualita-card__heading">Transparentnost kampaně 2026</h2>
                        <div className="aktualita-card__message">V souladu s nařízením Evropského parlamentu a Rady (EU) 2024/900 o transparentnosti a cílení politické reklamy zde zveřejňujeme
                            přehled politických reklamních sdělení a politických reklamních kampaní šířených jménem Volby pro Teplice jako kandidujícího subjektu voleb do zastupitelstev obcí 2026.
                        </div>
                        <div className="aktualita-card__message">Nepoužíváme v politických reklamních sděleních metody cílení ani osobní údaje.
                        </div>
                        <div className="aktualita-card__message">Zadavatelem politické reklamy je volební strana Volba pro Teplice, která kandiduje ve volbách do zastupitelstev obcí v roce 2026 v Teplicích a nemá právní subjektivitu
                        </div>
                        <div className="aktualita-card__message">Upozornění na politická reklamní sdělení, která mohou být v rozporu s pravidly můžete směřovat na slavicek.petr@seznam.cz
                        </div>
                    </div>
                </li>
                <li className="aktuality__list-item">
                    <h3  className="aktualita-card__message"><a target="_blank" rel="noreferrer" href="https://docs.google.com/spreadsheets/d/1Yg1qoeUJIyoolyM2xBCaeXKeDzFmcSceDZnMh0RA8bU/edit?usp=sharing">Odkaz na přehled politických reklamních sdělení</a></h3>
                </li>
            </ul>
        </section>
    );
};

export default TransparentnostList;
