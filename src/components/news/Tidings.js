import React from "react";
import News from './News'

const Tidings = ({news}) => {

  return (
    <div className="row">
      {news.map(res=>{
         return( <News key={res.url} news={res}/>)
        })}
    </div>
  );
};

export default Tidings;
