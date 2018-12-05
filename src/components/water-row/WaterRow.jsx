import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './WaterRow.css';

class WaterRow extends PureComponent {
  render() {
    return (
      <div className='water-row'>
        {this.props.timestamp && <div className='water-col'>{this.props.timestamp}</div>}
        {this.props.ph && <div className='water-col'>{`PH ${this.props.ph}`}</div>}
      </div>
    );
  }
}

WaterRow.propTypes = {
  timestamp: PropTypes.string,
  ph: PropTypes.number,
  kh: PropTypes.string,
  gh: PropTypes.string,
  ammonia: PropTypes.string,
  nitrite: PropTypes.string,
  nitrate: PropTypes.string,
  phosphate: PropTypes.string
};

export default WaterRow;
