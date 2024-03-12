import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineChart = () => {
  const chartRef = useRef();
    console.log(chartRef)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/aapl.json'); // Replace with the correct path
        const data = await response.json();

        // Declare the chart dimensions and margins.
        const width = 400;
        const height = 200;
        const marginTop = 20;
        const marginRight = 30;
        const marginBottom = 30;
        const marginLeft = 40;

        // Declare the x (horizontal position) scale.
        const x = d3.scaleUtc()
          .domain(d3.extent(data, d => new Date(d.date)))
          .range([marginLeft, width - marginRight]);

        // Declare the y (vertical position) scale.
        const y = d3.scaleLinear()
          .domain([0, d3.max(data, d => d.close)])
          .range([height - marginBottom, marginTop]);

        // Declare the line generator.
        const line = d3.line()
          .x(d => x(new Date(d.date)))
          .y(d => y(d.close));

        // Create the SVG container using the useRef hook.
        const svg = d3.create('svg')
          .attr("width", width)
          .attr("height", height)
          .attr("viewBox", [0, 0, width, height])
          .attr("style", "max-width: 100%; height: auto; height: intrinsic;");
        // Add the x-axis.
        svg.append("g")
          .attr("transform", `translate(0,${height - marginBottom})`)
          .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))
          .call(g => g.select(".domain").remove());

        // Add the y-axis, remove the domain line, add grid lines, and a label.
        svg.append("g")
          .attr("transform", `translate(${marginLeft},0)`)
          .call(d3.axisLeft(y).ticks(height / 40))
          .call(g => g.select(".domain").remove())
        //   .call(g => g.selectAll(".tick line").clone()
        //     .attr("x2", width - marginLeft - marginRight)
        //     .attr("stroke-opacity", 0.1))
          .call(g => g.append("text")
            .attr("x", -marginLeft)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text("↑ Daily Activity"));

        // Append a path for the line.
        svg.append("path")
          .attr("fill", "none")
          .attr("stroke", "steelblue")
          .attr("stroke-width", 1.5)
          .attr("d", line(data));
          chartRef.current.appendChild(svg.node())
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Run this effect only once when the component mounts

  return <div ref={chartRef}></div>;
};

export default LineChart;
