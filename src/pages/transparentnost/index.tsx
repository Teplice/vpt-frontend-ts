import Head from "next/head";
import { Fragment } from "react";
import { NextPage } from "next";
import {TransparencyDoc} from "../../interfaces/models";
import transparencyData from '../../../public/data/transparentnost.json'

import TransparentnostList from "../../components/transparentnost/transparentnost-list";

interface TransparencyProps {
  title: string;
  description: string;
  url: string;
  income: TransparencyDoc[];
}

const TransparentnostPage: NextPage<TransparencyProps, TransparencyProps> = ({ income }) => {
  return (
    <Fragment>
      <TransparentnostList
        transparencyItems={income}
      />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const transparencyItems: TransparencyDoc[] = transparencyData;


  return {
    props: {
      income: transparencyItems
    },
    revalidate: 60,
  };
};

export default TransparentnostPage;
