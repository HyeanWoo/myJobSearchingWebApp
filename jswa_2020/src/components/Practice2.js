import React from 'react';

const Practice2 = ({ninjas, deleteFunc}) => {
  const ninjaList = ninjas.map(ninja => {
    // return (ninja.age > 23) ? (
    //   <div className="ninjaList" key={ninja.id}>
    //     <div>{ninja.name}</div>
    //     <div>{ninja.age}</div>
    //     <div>{ninja.belt}</div>
    //   </div>
    // ) : null;
    return (
      <div className="ninjaList" key={ninja.id}>
        <div>{ninja.name}</div>
        <div>{ninja.age}</div>
        <div>{ninja.belt}</div>
        <button onClick={()=>{deleteFunc(ninja.id)}}>Del</button>
      </div>
    );
  });

  return(
    <div className="ninja-list">
      {ninjaList}
    </div>
  );
}

export default Practice2;