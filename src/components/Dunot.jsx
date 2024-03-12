import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const Dunot = ({setDataCategory, colorRange}) => {
  const donutContainer = useRef(null);
  let colors = []

  useEffect(() => {
    const width = 250;
    const height = width;
    const radius = width / 2;

    const arc = d3.arc()
      .innerRadius(radius * 0.67)
      .outerRadius(radius - 1);

    const pie = d3.pie()
      .padAngle(1 / radius)
      .sort(null)
      .value(d => d.value);

      const color = d3.scaleOrdinal()
      .domain(data.map(d => d.name))
      .range(d3.quantize(t => d3.interpolateRgb(colorRange.color1,colorRange.color2)(t), data.length));
    const svg = d3.create('svg')
      .attr('width', '100%') // Set the width to 100%
      .attr('height', '100%') // Set the height to 100%
      .attr('viewBox', [-width / 2, -height / 2, width, height])
      .style('max-width', '100%') // Ensure it doesn't exceed the container width
      .style('height', 'auto'); // Allow the height to adjust based on the width

    svg.append('g')
      .selectAll()
      .data(pie(data))
      .join('path')
      .attr('fill', d => color(d.data.name))
      .attr('d', arc)
      .append('title')
      .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`);

      const categoryColors = color.range();
      for(let i = 0; i < data.length; i++){
          colors.push(
              {
                  category:data[i].name,
                  color:categoryColors[i]
              }
          )
      }
      setDataCategory(colors)
    donutContainer.current.innerHTML = ''; // Clear previous content
    donutContainer.current.appendChild(svg.node());
  }, []);

  const data = [
    {
      name: 'airtime',
      value: 3664745,
    },
    {
      name: 'data',
      value: 6467346,
    },
    {
        name: 'bills',
        value: 6807346,
      },
  ];

  return (
    <div ref={donutContainer} style={{ width: '150px', height: '150px' }}>
      {/* Additional content can be added here */}
    </div>
  );
};

export default Dunot;
