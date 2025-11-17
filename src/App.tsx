import { Header } from "@/components/layout/header/header";
import { HomePage } from "@/pages/home-page/home-page";

export const App = () => {
  return (
    <>
      <Header className={"mb-10"} />
      <HomePage />
    </>
  );
};
