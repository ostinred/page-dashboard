import React, { useState, FunctionComponent } from 'react';
import TabHeader from './components/TabHeader';
import { data as fakeData, dataTitles, DATA_TITLES_MAP } from './data';
import Table from './components/Table';
import Tabs from './components/Tabs';

const App: FunctionComponent = () => {
  const [data, setData] = useState(fakeData);

  const handleAddSybmol = () => console.log('handleAddSybmol');
  const handleEditPortfolio = () => console.log('handleEditPortfolio');
  const handleViewHeadlines = () => console.log('handleViewHeadlines');
  const handleExcelExport = () => console.log('handleExcelExport');
  const handlePrint = () => console.log('handlePrint');

  return (
    <div className="is-container">
      <TabHeader
        onAddSybmol={handleAddSybmol}
        onEditPortfolio={handleEditPortfolio}
        onViewHeadlines={handleViewHeadlines}
        onExcelExport={handleExcelExport}
        onPrint={handlePrint}
      />

      <Tabs>
        <Tabs.Tab name="Table" id="table">
          <Table
            titlesCopy={dataTitles}
            titles={DATA_TITLES_MAP}
            data={data}
            onChange={setData}
          />
        </Tabs.Tab>
        <Tabs.Tab name="Description" id="description">
          <div className="is-content-wrapper">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique, voluptatum quis! Recusandae rerum, deleniti in
              voluptates facere suscipit hic impedit culpa inventore distinctio,
              consequatur, doloremque assumenda enim quidem voluptatum pariatur.
            </p>
          </div>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default App;
