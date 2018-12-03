import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './WaterTable.css';

class WaterTable extends PureComponent {
  renderRows = () => {
    const data = this.props.data;

    return Object.keys(data).map((key) => {
      const value = data[key];
      return <div className='water-table__row'>{`${value.date} ph${value.ph}`}</div>
    });
  };

  render() {
    return (
      <div className='water-table'>
        {this.renderRows()}
      </div>
    );
  }
}

WaterTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default WaterTable;
