import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './WaterTable.css';
import WaterRow from '../water-row';

class WaterTable extends PureComponent {
  renderRows = () => {
    const data = this.props.data;
    return Object.keys(data).map((key) => <WaterRow key={key} {...data[key]} />);
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
