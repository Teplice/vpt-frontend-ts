import Link from "next/link";

const DonateSection: React.FC = () => {
  return (
    <div className="donate-section__container">
      <Link href="https://dary.zeleni.cz/id/teplice">
        <a target="_blank" rel="noreferrer" className="donate-section__button">
          Chcete přispět na kampaň?
        </a>
      </Link>
    </div>
  );
};

export default DonateSection;
