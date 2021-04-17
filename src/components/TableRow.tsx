import * as React from 'react';
import { IDayRange, ITableRow } from './../models';
import Checkbox from './Checkbox';
import LabelRating from './LabelRating';

interface TableRowProps {
  data: ITableRow;
  onChange: (item: ITableRow) => void;
}

const TableRow: React.FunctionComponent<TableRowProps> = ({
  data,
  onChange,
}) => {
  const {
    symbol,
    price,
    change,
    changePercentage,
    alerts,
    volume,
    averageVolume,
    prevClose,
    dayRange,
    open,
    high,
    low,
    quantRating,
    authorRating,
    sellSideRating,
  } = data;

  const renderChangeNumbers = (value: string, withPercentage?: boolean) => {
    if (Math.sign(Number(value)) > 0) {
      return (
        <span className="positive-number">
          {withPercentage ? `${value}%` : value}
        </span>
      );
    }

    if (Math.sign(Number(value)) < 0) {
      return (
        <span className="negative-number">
          {withPercentage ? `${value}%` : value}
        </span>
      );
    }

    return value;
  };

  const renderDayRange = ({ start, diff, end }: IDayRange) => {
    return (
      <div className="day-range">
        <span>{start}</span>
        <div className="range">
          <span className="indicator" style={{ left: `${diff * 100}%` }} />
        </div>
        <span>{end}</span>
      </div>
    );
  };

  const onCheckboxChange = () => {
    onChange({ ...data, alerts: !alerts });
  };

  return (
    <tr className="table-row">
      <td>
        <div className="symbol">{symbol}</div>
      </td>
      <td>{price}</td>
      <td>{renderChangeNumbers(change)}</td>
      <td>{renderChangeNumbers(changePercentage, true)}</td>
      <td>
        <Checkbox
          name="alert"
          checked={alerts}
          onCheckboxChange={onCheckboxChange}
        />
      </td>
      <td>{volume}</td>
      <td>{averageVolume}</td>
      <td>{prevClose}</td>
      <td>{open}</td>
      <td>{high}</td>
      <td>{low}</td>
      <td>{renderDayRange(dayRange)}</td>
      <td className="quant-cell">
        <LabelRating value={quantRating} />
      </td>
      <td className="saAuthours-cell">
        <LabelRating value={authorRating} />
      </td>
      <td className="sellSide-cell">
        <LabelRating value={sellSideRating} />
      </td>
    </tr>
  );
};

export default TableRow;
