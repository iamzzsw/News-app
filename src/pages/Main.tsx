import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main  from "../components/Main/Main"
import MainLayout from "../layouts/MainLayout/MainLayout";

const MainPage = () => {
  return <MainLayout header={<Header />} content={<Main />} footer={<Footer />} />;
};

export default MainPage;
