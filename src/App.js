import './sass/main.scss';

import Header from "./components/Header";
import PricingFree from "./components/PricingFree";
import PricingPro from "./components/PricingPro";
import PricingEnterprise from "./components/PricingEnterprise";

function App() {
  return (
    <div className="container">
      <Header />
      
      <div className="pricingContainer">
        <PricingFree />
        <PricingPro />
        <PricingEnterprise />
      </div>
    </div>
  );
}

export default App;
