import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import './Gauge.css';

// import am4themes_animated from '@amcharts/amcharts4/themes/animated';
function Gauge({ id, color, value }) {
	useEffect(() => {
		let chart = am4core.create(id, am4charts.GaugeChart);

		let axis = chart.xAxes.push(new am4charts.ValueAxis());

		axis.min = 0;
		axis.max = 311;
		axis.strictMinMax = true;

		// Hide labels
		axis.renderer.grid.template.disabled = true;
		axis.renderer.labels.template.disabled = true;

		chart.startAngle = -225;
		chart.endAngle = 45;
		chart.innerRadius = am4core.percent(94);

		// Add ranges
		let range = axis.axisRanges.create();
		range.value = 0;
		range.endValue = value;
		range.axisFill.fillOpacity = 1;
		range.axisFill.fill = am4core.color(color);
		//in 1 to make sure we don't see lines
		range.axisFill.zIndex = 1;

		// Add ranges
		let range2 = axis.axisRanges.create();
		range2.value = value;
		range2.endValue = 311;
		range2.axisFill.fillOpacity = 1;
		range2.axisFill.fill = am4core.color('#eaeaea');
		//in 1 to make sure we don't see lines
		range2.axisFill.zIndex = 1;

		return () => {
			chart.dispose();
		};
	}, []);

	return (
		<>
			<div id={id}></div>
		</>
	);
}

export default Gauge;
