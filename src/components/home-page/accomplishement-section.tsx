import AccomplishementPending from "./accomplishement-pending";
import AccomplishementSolved from "./accomplishement-solved";
import AccomplishementHeader from "./accomplishement-header";
import ProgramDone from "./program-done-section";

const Accomplishement: React.FC = () => {
  return (
    <section className="accomplishement__container">
      <div className="accomplishement__wrapper">

        <h2 className="heading-secondary">
          Mnoho věcí se nám již podařilo, nicméně máme před sebou ještě dlouhou
          cestu
        </h2>
        <ProgramDone/>
        <AccomplishementHeader/>
        <div className="accomplishement__lists">
          <AccomplishementSolved />
          <AccomplishementPending />
        </div>
      </div>
    </section>

  );
};

export default Accomplishement;
