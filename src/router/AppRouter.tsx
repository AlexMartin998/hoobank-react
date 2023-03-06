import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LandingPage } from '../landing';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
