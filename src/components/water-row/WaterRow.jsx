import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './WaterRow.css';

class WaterRow extends PureComponent {
  render() {
    return (
      <div className='water-row'>
        {this.props.timestamp && <div className='water-col'>{moment(this.props.timestamp).format('MMM Do YYYY')}</div>}
        {this.props.ph != null && <div className='water-col'>{`PH ${this.props.ph}`}</div>}
        {this.props.kh != null && <div className='water-col'>{`KH ${this.props.kh}`}</div>}
        {this.props.gh != null && <div className='water-col'>{`GH ${this.props.gh}`}</div>}
        {this.props.ammonia != null && <div className='water-col'>{`NH3 ${this.props.ammonia}`}</div>}
        {this.props.nitrite != null && <div className='water-col'>{`NO2 ${this.props.nitrite}`}</div>}
        {this.props.nitrate != null && <div className='water-col'>{`NO3 ${this.props.nitrate}`}</div>}
        {this.props.phosphate != null && <div className='water-col'>{`PO4 ${this.props.phosphate}`}</div>}
      </div>
    );
  }
}

WaterRow.propTypes = {
  timestamp: PropTypes.string,
  ph: PropTypes.number,
  kh: PropTypes.number,
  gh: PropTypes.number,
  ammonia: PropTypes.number,
  nitrite: PropTypes.number,
  nitrate: PropTypes.number,
  phosphate: PropTypes.number
};

export default WaterRow;
