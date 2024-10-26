import RegisterPage from './pages/RegisterPage';
import Header from './components/Header';
import RegisterShopify from './pages/RegisterShopify';
import { useRegistration } from './context/RegistrationContext';
import { Route, Routes } from 'react-router-dom';
import ShopifyConnectedPage from './pages/ShopifyConnectedPage';
import ShopifyResponsePage from './pages/ShopifyResponsePage';
import ConnectGmailPage from './pages/ConnectGmailPage';
import NoGmailContentPage from './pages/NoGmailContentPage';
import GmailResponsePage from './pages/GmailResponsePage';
import RegisterMobileFinalPage from './pages/RegisterMobileFinalPage';
import LoginPage from './pages/LoginPage';
import LoginSuccessPage from './pages/LoginSuccessPage';

const App = () => {
  const { registrationStep } = useRegistration();

  console.log(registrationStep);

  return (
    <div className="px-8">
      {registrationStep !== 0 && <Header />}

      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login-success" element={<LoginSuccessPage />} />
        <Route path="/shopify" element={<RegisterShopify />} />
        <Route path="/shopify-success" element={<ShopifyConnectedPage />} />
        <Route path="/shopify-response" element={<ShopifyResponsePage />} />
        <Route path="/gmail" element={<ConnectGmailPage />} />
        <Route path="/gmail-empty" element={<NoGmailContentPage />} />
        <Route path="/gmail-response" element={<GmailResponsePage />} />
        <Route path="/onboard-complete" element={<RegisterMobileFinalPage/>} />
      </Routes>
    </div>
  );
};

export default App;
