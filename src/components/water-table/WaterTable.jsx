import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class WaterTable extends PureComponent {
  render() {
    return (
      <div className='water-table'>

      </div>
    );
  }
}

WaterTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default WaterTable;
