import RegisterPage from './pages/RegisterPage';
import RegisterShopify from './pages/RegisterShopify';
import { Route, Routes, useLocation } from 'react-router-dom';
import ShopifyConnectedPage from './pages/ShopifyConnectedPage';
import ShopifyResponsePage from './pages/ShopifyResponsePage';
import ConnectGmailPage from './pages/ConnectGmailPage';
import NoGmailContentPage from './pages/NoGmailContentPage';
import GmailResponsePage from './pages/GmailResponsePage';
import RegisterMobileFinalPage from './pages/RegisterMobileFinalPage';
import LoginPage from './pages/LoginPage';
import LoginSuccessPage from './pages/LoginSuccessPage';
import VerticalBar from './components/VerticalBar';

const App = () => {
  const location = useLocation();

  return (
    <div className="lg:grid lg:grid-cols-3">
      <div
        style={{
          background: 'linear-gradient(339.02deg, #0D3251 0%, #19476C 103.05%)',
          display:
            location.pathname.includes('/onboard-complete') ||
            location.pathname.includes('/login-success')
              ? 'none'
              : 'block',
        }}
      >
        <VerticalBar />
      </div>
      <div
        className={`bg-portrait bg-landscape sm:h-screen bg-largeScreen 
                  ${location.pathname.includes('/onboard-complete') || location.pathname.includes('/login-success') ? 'lg:col-start-1 lg:col-end-4' : 'lg:col-start-2 lg:col-end-4'}`}
      >
        <div className="px-8 py-4 sm:px-10 sm:py-20 sm:max-w-[540px] mx-auto sm:bg-white">
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
            <Route
              path="/onboard-complete"
              element={<RegisterMobileFinalPage />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
