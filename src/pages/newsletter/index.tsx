import {Fragment} from "react";
import {NextPage} from "next";
import SimpleHead from "../../components/meta/simple-head";
import SubscribeNewsletter from "../../components/newsletter/subscribeNewsletter";
import NewsletterList from "../../components/newsletter/newsletter-list";
import {NewsletterDoc} from "../../interfaces/models";
import newsletterData from "../../../public/data/newsletter.json";


interface NewsletterProps {
    newsletters: NewsletterDoc[];
}

const NewsletterPage: NextPage<NewsletterProps> = ({ newsletters }) => {
    return (
        <Fragment>
            <SimpleHead
                title="Newsletter "
                description="Zpravodaj Volby pro Teplice"
                url="newsletter"
            />
            <section className="aktuality">
                <h1 className="heading-primary aktuality__title">Newsletter</h1>
                <SubscribeNewsletter/>
                <NewsletterList newsletters={newsletters}/>
            </section>

        </Fragment>
    );
};

export const getStaticProps = async () => {
    const newsletterList: NewsletterDoc[] = newsletterData;
    newsletterList.sort((a, b) => {
        return Date.parse(b.date) - Date.parse(a.date);
    });

    return {
        props: {
            newsletters: newsletterList,
        },
        revalidate: 60,
    };
};

export default NewsletterPage;
