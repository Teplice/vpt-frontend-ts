import { Buildings, Tree, ShieldPlus, Bus, Handshake, Money, TreeEvergreen } from "phosphor-react";

const Program: React.FC = () => {
  return (
    <section className="program__container">
      <div className="program__wrapper">
        <h2 className="heading-secondary">Mezi naše hlavní programové priority patří především</h2>
        <ul className="program__priorities">
          <li className="program__priorities__item">
            <ShieldPlus className="program__priorities__item--icon" />
            <p className="program__priorities__item--title">Bezpečné město</p>
            <p className="program__priorities__item--text">
              Bezpečnost obyvatel Teplic je naší prioritou. Posílili jsme hlídky Městské policie doplněné Asistenty prevence kriminality. Otevřeli jsme služebnu Městské policie u Červeného kostela. Zavádíme výcvik strážníků a jejich průběžné vzdělávání.
            </p>
          </li>
          <li className="program__priorities__item">
            <Tree className="program__priorities__item--icon" />
            <p className="program__priorities__item--title">Čisté a upravené město</p>
            <p className="program__priorities__item--text">
              Zajistili jsme častější úklid kolem popelnic. Zajišťujeme intenzivní kontrolu úklidu města. Zveřejnili jsme kompletní harmonogram úklidu ve městě.
            </p>
          </li>
          <li className="program__priorities__item">
            <TreeEvergreen className="program__priorities__item--icon" />
            <p className="program__priorities__item--title">Zdravé životní prostředí</p>
            <p className="program__priorities__item--text">
              Připravili jsme manuál péče o zeleň na sídlištích, který dá péči o zeleň pravidla a náplň i mimo hlavní parky. Kontrolujeme práci dodavatele v parcích i na sídlištích. Právě zeleň se z velké míry podílí na tom, jak se ve městě cítíme.
            </p>
          </li>

          {/*<li className="program__priorities__item">*/}
          {/*  <Bus className="program__priorities__item--icon" />*/}
          {/*  <p className="program__priorities__item--title">Fungujicí dopravní infrastruktura</p>*/}
          {/*  <p className="program__priorities__item--text">*/}
          {/*    Promyšlená doprava šetří náš čas, nervy i přírodu. Podpoříme bezemisní dopravu v*/}
          {/*    centru města a obytných čtvrtích.*/}
          {/*  </p>*/}
          {/*</li>*/}
          {/*<li className="program__priorities__item">*/}
          {/*  <Handshake className="program__priorities__item--icon" />*/}
          {/*  <p className="program__priorities__item--title">Vstřícná a užitečná samospráva</p>*/}
          {/*  <p className="program__priorities__item--text">*/}
          {/*    Zavedeme hodnocení kvality úřadu občany. Zajímá nás zpětná vazba, budeme na ni*/}
          {/*    reagovat.*/}
          {/*  </p>*/}
          {/*</li>*/}
          {/*<li className="program__priorities__item">*/}
          {/*  <Money className="program__priorities__item--icon" />*/}
          {/*  <p className="program__priorities__item--title">Přehledné hospodaření města</p>*/}
          {/*  <p className="program__priorities__item--text">*/}
          {/*    Chceme udržet městské finance v dobrém stavu. Investice nemusí znamenat zadlužení.*/}
          {/*  </p>*/}
          {/*</li>*/}
        </ul>
      </div>
    </section>
  );
};

export default Program;
