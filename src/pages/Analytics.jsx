import React from 'react'
import { CardA, CardB, CardC, CardD, CardE, Sellers } from "../components"

const Analytics = () => {
  return (
    <div className="analytics">
      <section className="sec-a flex">
        <div>
          <CardA rate={2} name="currency" />
          <CardA rate={1} name="currency" />
          <CardA />
          <CardA rate={2} name="currency" />
        </div>
        <div>
          <CardB colorRange={{color1:"rgb(255,184,14)",color2:"rgb(253,242,224)"}} />
          <CardB colorRange={{color1:"rgb(60,123,239)",color2:"rgb(130,169,248)"}}/>
        </div>
      </section>
      <section className="sec-b">
        <div>
          <CardC />
          <CardD /></div>
        <div className="sec-b-right">
          <div>
          <CardE/>
          <CardE/>
          </div>
          <div>
          <Sellers/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Analytics
