"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [dashboardData, setDashboardData] = useState(null);

  return (
    <AppContext.Provider value={{ dashboardData, setDashboardData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
