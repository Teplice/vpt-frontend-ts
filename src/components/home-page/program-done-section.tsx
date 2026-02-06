import { Buildings, Tree, ShieldPlus, Bus, Handshake, Money, TreeEvergreen } from "phosphor-react";

const ProgramDone: React.FC = () => {
  return (
    <section className="program__container">
      <div className="program__wrapper">
        <ul className="program__priorities">
          <li className="program__priorities__item">
            <ShieldPlus className="program__priorities__item--icon" />
            <p className="program__priorities__item--title">Bezpečné město</p>
            <p className="program__priorities__item--text">
              Bezpečnost obyvatel Teplic je naší prioritou. Posílili jsme hlídky Městské policie doplněné Asistenty prevence kriminality. Otevřeli jsme služebnu Městské policie u Červeného kostela. Zavádíme výcvik strážníků a jejich průběžné vzdělávání.
            </p>
          </li>

          <li className="program__priorities__item">
            <TreeEvergreen className="program__priorities__item--icon" />
            <p className="program__priorities__item--title">Zdravé životní prostředí</p>
            <p className="program__priorities__item--text">
              Připravili jsme manuál péče o zeleň na sídlištích, který dá péči o zeleň pravidla a náplň i mimo hlavní parky. Kontrolujeme práci dodavatele v parcích i na sídlištích. Právě zeleň se z velké míry podílí na tom, jak se ve městě cítíme.
            </p>
          </li>
          <li className="program__priorities__item">
          <Tree className="program__priorities__item--icon" />
          <p className="program__priorities__item--title">Čisté a upravené město</p>
          <p className="program__priorities__item--text">
            Zajistili jsme častější úklid kolem popelnic. Zajišťujeme intenzivní kontrolu úklidu města. Zveřejnili jsme kompletní harmonogram úklidu ve městě, aby si každý mohl ověřit, že úklid v jeho okolí probíhá tak jak má.
          </p>
        </li>
        </ul>
      </div>
    </section>
  );
};

export default ProgramDone;
