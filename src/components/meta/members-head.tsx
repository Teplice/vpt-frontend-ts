import Head from "next/head";
import { KandidatDoc, ZastupitelDoc } from "../../interfaces/models";

interface MembersHeadProps {
  zastupitele: ZastupitelDoc[] | KandidatDoc[];
  title: string;
  description: string;
  url: string;
}

const MembersHead: React.FC<MembersHeadProps> = (props) => {
  let loadedMemberNames = props.zastupitele.flatMap((element) => {
    return element.name;
  }).join(", ");

  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={loadedMemberNames} />
      <meta property="og:url" content={`${process.env.HOST_URL}/${props.url}`} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
    </Head>
  );
};

export default MembersHead;
