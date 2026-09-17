import {
  Buildings,
  Tree,
  PoliceCar, House
} from "phosphor-react";
import {MountainsIcon, PersonSimpleSwimIcon} from "@phosphor-icons/react";

const Program: React.FC = () => {
  return (
    <section className="program__container">
      <div className="program__wrapper">
        <h2 className="heading-secondary">Priority našeho volebního programu</h2>
        <ul className="program__priorities">
          <li className="program__priorities__item">
            <PoliceCar className="program__priorities__item--icon" />
            <p className="program__priorities__item--title">Bezpečné město</p>
            <p className="program__priorities__item--text">
              Bezpečnost obyvatel Teplic je naší prioritou. Zcela jsme přebudovali fungování městské policie, zásadně jsme navýšili počty hlídek v ulicích, zajistili jsme rychlou dostupnost, doplnili jsme Asistenty prevence kriminality. Zavádíme výcvik strážníků a jejich průběžné vzdělávání. Posílíme kamerový systém a jeho schopnosti automatické detekce a varování.
            </p>
            <p className="program__priorities__item--text">
              Prosadili jsme vyhlášku proti alkoholu a budeme naplňovat schválený akční plán řešení bezdomovectví aktivní prací s bezdomovci v terénu, vybudováním noclehárny, spoluprací se záchytkou na odjezdu klientů z jiných měst zpět domů.
            </p>
          </li>
          <li className="program__priorities__item">
            <Tree className="program__priorities__item--icon" />
            <p className="program__priorities__item--title">Městské technické služby</p>
            <p className="program__priorities__item--text">
              Město musí mít péči o zeleň a čistotu pod plnou kontrolou. Proto založíme městské technické služby.
            </p>
            <p className="program__priorities__item--text">
              <ul>
                <li>kvalita úklidu plně v rukách města</li>
                <li>pružné využití kapacit na různé činnosti</li>
                <li>vlastní arborista pro péči o stromy</li>
                <li>snazší řízení sekání podle klimatických podmínek</li>
                <li>vlastní péče o záhony a květiny</li>
                <li>finanční úspory</li>
              </ul>
            </p>

          </li>
          <li className="program__priorities__item">
            <Buildings className="program__priorities__item--icon" />
            <p className="program__priorities__item--title">Sídliště pro život</p>
            <p className="program__priorities__item--text">
              Sídliště přestanou být opomíjeným okrajem města, vždyť v nich žije velká část obyvatel. Uděláme ze sídlišť skvělá místa pro život. Věnovat se budeme i rozvoji v Hudcově a v Sobědruhách.
              <ul>
                <li>rezidentní parkování a parkovací domy</li>
                <li>více stromů a lepší péče o zeleň</li>
                <li>opravené chodníky</li>
                <li>atraktivní dětská hřiště a sportoviště</li>
                <li>bezpečí</li>
              </ul>

            </p>
          </li>
          <li className="program__priorities__item">
            <House className="program__priorities__item--icon" />
            <p className="program__priorities__item--title">Dostupné bydlení</p>
            <p className="program__priorities__item--text">
              Připravili jsme koncepci bytové politiky města a budeme budovat městský bytový fond, který přinese dostupné byty pro potřebné profese, mladé lidi, seniory i sociálně potřebné.
            </p>
            <p className="program__priorities__item--text">
              Postavíme prvních 50 nových městských bytů a další budeme získávat rekonstrukcemi, nákupy domů i jednotlivých bytů.
            </p>
          </li>
          <li className="program__priorities__item">
            <PersonSimpleSwimIcon className="program__priorities__item--icon" />
            <p className="program__priorities__item--title">Obnova zámecké plovárny</p>
            <p className="program__priorities__item--text">
              Po našem vstupu do vedení města se podařilo rychle vykoupit areál plovárny v Zámecké zahradě. Budeme pokračovat v jeho obnově.
            </p>
            <p className="program__priorities__item--text">
              <ul>
                <li>připravíme a vypíšeme architektonickou soutěž na konečnou podobu</li>
                <li>dohlédneme na projektování a povolení stavby</li>
                <li>vybudujeme obnovenou plovárnu</li>
                <li>vrátíme plovárnu Tepličanům</li>
              </ul>
            </p>
          </li>
          <li className="program__priorities__item">
            <MountainsIcon className="program__priorities__item--icon" />
            <p className="program__priorities__item--title">Obrana proti lithiu</p>
            <p className="program__priorities__item--text">
              Připravovaná těžba lithia v Krušných horách může zasáhnout jak naše uzdravující se hory, tak naše město zhoršením životních podmínek obyvatel nebo narušením lázeňských pramenů.
            </p>
            <p className="program__priorities__item--text">
              Aktivně jsme nechali zpracovat vysoce odborné námitky proti EIA a důsledně budeme prosazovat ochranu našeho města i hor proti negativním dopadům těžby lithia. Pokud k těžbě dojde, budeme tvrdě požadovat kompenzace za její případné dopady.</p>
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
