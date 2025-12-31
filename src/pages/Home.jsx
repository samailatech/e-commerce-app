import HeroSection from '../components/HeroSection';
import HeroSection1 from '../components/HeroSection1';
import DealsSection from '../components/DealsSection';
import TopSellers from '../components/topSellers';
import SponsoredProducts from '../components/SponsoredProducts';
import HolidaySales from '../components/HolidaySales';
import NiveaOfficialStore from '../components/NiveaOfficialStore';
import PhoneDeals from '../components/PhoneDeals';
import ApplianceDeals from '../components/ApplianceDeals';
import BeautyDeals from '../components/BeautyDeals';
import EverythingMustGo from '../components/EverythingMustGo';
import TvDeals from '../components/TvAudioDeals';
import HomeDeals from '../components/HomeDeals';
import DiagoDeals from '../components/DiagoDeals';
import ItelDeals from '../components/ItelDeals';
import EverydayEleganceDeals from '../components/EverydayEleganceDeals';
import HolidayMustHave from '../components/HolidayMustHave';
import TopComputingDeals from '../components/TopComputingDeals';
import PhoneAccessoriesDeals from '../components/PhoneAccessoriesDeals';
import SamMarketBar from '../components/SamMarketBar';
import AboutSamMarket from '../components/AboutSamMarket';

const Home = () => {
  return (
    <>
      <div className="page-bg">
        <HeroSection />
        <HeroSection1 />
        <DealsSection />
        <TopSellers />
        <SponsoredProducts />
        <HolidaySales />
        <NiveaOfficialStore />
        <PhoneDeals />
        <ApplianceDeals />
        <BeautyDeals />
        <EverythingMustGo />
        <TvDeals />
        <HomeDeals />
        <DiagoDeals />
        <ItelDeals />
        <EverydayEleganceDeals />
        <HolidayMustHave />
        <TopComputingDeals />
        <PhoneAccessoriesDeals />
        <SamMarketBar />
      </div>

      <AboutSamMarket />
    </>
  );
};

export default Home;
