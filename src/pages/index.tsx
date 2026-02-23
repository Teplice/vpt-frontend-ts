import type { NextPage } from "next";
import SimpleHead from "../components/meta/simple-head";
import { Fragment } from "react";
import HomePage from "../components/home-page/home-page";

const Home: NextPage = () => {
  return (
    <Fragment>
      <SimpleHead
        title="Volba pro Teplice"
        description="Domovská stránka teplické politické strany - Volba pro Teplice"
        url=""
        keywords="Volba pro Teplice, Teplice, politika, politická strana, volby 2026, program, městská zeleň, bydlení Teplice, parkování Teplice, koupaliště Teplice, kultura Teplice, zastupitelstvo Teplice, pořádek Teplice, územní plán Teplice, dětská hřiště Teplice, kumunální politika, komunita Teplice, Piráti Teplice, Zelenní Teplice, Lidovci Teplice, Nezávislí Teplice, koalice Teplice"
      />
      <HomePage />
    </Fragment>
  );
};

export default Home;
