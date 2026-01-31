const SubscribeNewsletter: React.FC = () => {
    return (
        <section>
            <ul className="aktuality__list">
                <li className="aktuality__list-item">
                    <div className="aktualita-card__text-container">
                        <h2 className="heading-secondary aktualita-card__heading">Vrátili jsme se k vydávání
                            pravidelného
                            zpravodaje VPT</h2>
                        <div className="aktualita-card__message">Znovu našim příznivcům zasíláme novinky a zajímavosti z
                            Volby
                            pro Teplice i z vedení města. Ve zpravodaji vás podrobněji informujeme o naší práci ve
                            vedení
                            města
                            i o plánech do budoucna.
                            Pokud chcete dostávat náš zpravodaj, přihlaste se k odběru formulářem
                        </div>
                        <div className="aktualita-card__message"><a
                            href="https://app.ngemailing.cz/lists/tg7537h1bt5b3/subscribe" target="_blank">Přihlašovací
                            formulář</a></div>
                    </div>
                </li>
            </ul>
        </section>
    )
}
export default SubscribeNewsletter;