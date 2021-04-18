import React from 'react';
import Button from './Button/Button';
import Divider from './Divider';

interface ITabHeader {
  onAddSybmol: () => void;
  onEditPortfolio: () => void;
  onExcelExport: () => void;
  onPrint: () => void;
  onViewHeadlines: () => void;
}

const TabHeader: React.FC<ITabHeader> = ({
  onAddSybmol,
  onEditPortfolio,
  onExcelExport,
  onPrint,
  onViewHeadlines,
}) => {
  return (
    <div className="tab-header">
      <h2 className="is-heading">
        Portfolio 1 - Dividends & Income
        <i className="icon-arrow-bottom" aria-hidden="true" />
      </h2>

      <div className="buttons-wrapper">
        <Button
          icon="plus"
          title="Add Symbol"
          colorScheme="dark"
          onClick={onAddSybmol}
        />
        <Button
          icon="pencil"
          title="Edit Portfolio"
          onClick={onEditPortfolio}
        />

        <Divider />
        <Button title={false} icon="excel" onClick={onExcelExport} />
        <Button title={false} icon="print" onClick={onPrint} />
        <Divider />

        <Button
          icon="document"
          title="View Headlines"
          onClick={onViewHeadlines}
        />
      </div>
    </div>
  );
};

export default TabHeader;
