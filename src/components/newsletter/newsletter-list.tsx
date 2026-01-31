import {NewsletterDoc} from "../../interfaces/models";

interface NewsletterListProps {
    newsletters: NewsletterDoc[];
}

const NewsletterList: React.FC<NewsletterListProps> = ({newsletters}) => {
    return (
        <div className="aktualita-card__text-container">
            <h2 className="heading-secondary aktualita-card__heading">Starší vydání zpravodaje najdete zde</h2>
            {newsletters.map((newsletter) =>
                <div className="aktualita-card__message" key={newsletter.id}><a
                    href={newsletter.url}
                    target="_blank" rel="noreferrer">{newsletter.title}</a></div>)}
        </div>
    )
}
export default NewsletterList