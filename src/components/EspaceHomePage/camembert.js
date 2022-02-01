import React from 'react';

import PieChart, {
  Series,
  Label,
  Connector,
  Size,
  Export
} from 'devextreme-react/pie-chart';



class Camembert extends React.Component {
  constructor(props) {
    super(props);

    this.pointClickHandler = this.pointClickHandler.bind(this);
    this.legendClickHandler = this.legendClickHandler.bind(this);
  }

  render() {
    const areas = [{
        country: 'Russia',
        area: 12
      }, {
        country: 'Canada',
        area: 7
      }, {
        country: 'USA',
        area: 7
      }, {
        country: 'China',
        area: 7
      }, {
        country: 'Brazil',
        area: 6
      }, {
        country: 'Australia',
        area: 5
      }, {
        country: 'India',
        area: 2
      }, {
        country: 'Others',
        area: 55
      }];
      
    return (
      <PieChart
        id="pie"
        dataSource={areas}
        palette="Bright"
        title="Area of Countries"
        onPointClick={this.pointClickHandler}
        onLegendClick={this.legendClickHandler}
      >
        <Series
          argumentField="country"
          valueField="area"
        >
          <Label visible={true}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>

        <Size width={500} />
        <Export enabled={true} />
      </PieChart>
    );
  }

  pointClickHandler(e) {
    this.toggleVisibility(e.target);
  }

  legendClickHandler(e) {
    let arg = e.target;
    let item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

    this.toggleVisibility(item);
  }

  toggleVisibility(item) {
    item.isVisible() ? item.hide() : item.show();
  }
}

export default Camembert;
