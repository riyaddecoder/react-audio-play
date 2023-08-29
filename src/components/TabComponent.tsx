import React, { useState } from 'react';

interface PropsI {
  className?: string;
  tabs: string[];
  contents: React.ReactNode[];
}

const TabComponent: React.FC<PropsI> = ({ className = '', tabs, contents }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className={className}>
      <div className="border-b border-gray-300">
        <ul className="flex">
          {tabs.map((eachTab, tabIndex) => (
            <li key={tabIndex} className="mr-1">
              <button onClick={() => handleTabClick(eachTab)} className={`tab-link py-2 px-4 rounded-t-lg ${activeTab === eachTab ? 'bg-slate-200 active:bg-slate-200' : 'hover:bg-slate-100'}`}>
                {eachTab}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4">
        {contents.map((eachContent, contentIndex) => (
          <div key={contentIndex} id={tabs[contentIndex]} className={`tab-content ${activeTab === tabs[contentIndex] ? '' : 'hidden'}`}>
            {eachContent}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
