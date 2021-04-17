import React, { useState, Children } from 'react';

const Tab: React.FC<{ id: string; name: string }> = ({ id, children }) => {
  return <div id={id}>{children}</div>;
};

const Tabs: React.FC & { Tab: typeof Tab } = ({ children }) => {
  const tabs: any[] = Children.toArray(children) || [];
  const defaultTab = tabs[0]?.props.id;
  const [selectedTab, setSelectedTab] = useState(defaultTab);

  return (
    <div className="tabs-wrapper">
      <nav role="navigation" className="tabs-navigation">
        {tabs.map((tab: any) => (
          <button
            key={tab.props.id}
            aria-current={tab.props.id === selectedTab}
            className={`tab-link ${
              tab.props.id === selectedTab ? 'is-active' : ''
            }`}
            onClick={() => setSelectedTab(tab.props.id)}>
            {tab.props.name}
          </button>
        ))}
      </nav>
      {tabs.find((item: any) => item.props.id === selectedTab)}
    </div>
  );
};

Tabs.Tab = Tab;

export default Tabs;
