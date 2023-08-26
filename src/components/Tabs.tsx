import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabInfo } from '@/interfaces/TabInfo';

interface TabsComponentProps {
  tabs: TabInfo[];
  onTabChange: (index: number) => void;
}

const TabsComponent: React.FC<TabsComponentProps> = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    onTabChange(newValue);
  };

  return (
    <Tabs value={activeTab} onChange={handleTabChange}>
      {tabs.map((tab, index) => (
        <Tab key={index} label={tab.label}/>
      ))}
    </Tabs>
  );
};

export default TabsComponent;
