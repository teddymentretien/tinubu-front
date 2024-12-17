import React from "react";
import Brokers from "./brokers";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SelectLanguage from "@/src/components/SelectLanguage";

const Home: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <div className="relative h-screen w-screen bg-gray-100">
      <div className="absolute top-4 right-4 min-w-36">
        <SelectLanguage />
      </div>

      <div className="flex items-center justify-center h-full">
        <div className="container">
          {/* <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">{t("welcome")}</h1> */}
          <Brokers />
        </div>
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
