import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';

export default class SliderComponent extends React.Component {
    render(){
      const {renderItem, items,className,slidesToShow,autoplay,speed,dots,responsive} = this.props;
      const settings = {dots: dots,speed: speed,autoplay: autoplay,slidesToShow: slidesToShow, responsive: responsive};


      if (!items || (items && items.length == 0)) {
        return <div className="no-data col-xs-12 padding-horizontal"><i>No data available</i></div>;
      }

	    return (
          <div className={className+ ' slider-component list-container'}>
    	      <Slider {...settings}>
    	      	{items.map(renderItem)}
    	      </Slider>
          </div>
	    );
	}
}

SliderComponent.defaultProps={
    slidesToShow: 1,
    dots: true,
    speed: 5000,
    autoplay: true

}