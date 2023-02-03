import { useState, useEffect } from "react";
import "./profile.css";

function Button({ param }) {
  const type = ["daily", "weekly", "monthly"];
  const [valor, setValor] = useState(2);
  useEffect(()=>{
    param(valor)
  },[valor])
  
  return (
    <>
      {type.map((e, i) => {
        return (
          <button onFocus={{color:"white"}}
            onClick={() => {
              setValor(i);
            }}
            key={i}
          >
            {e}
          </button>
        );
      })}
    </>
  );
}

export function Profile({ filter }) {
  return (
    <div className="contend">
      <section className="profile">
        <img src="/images/image-jeremy.png" alt="img-profile" />
        <div>
          <label className="for">Report for</label>
          <label className="name">Jeremy Robson</label>
        </div>
      </section>
      <nav className="button">
        <Button param={filter} />
      </nav>
    </div>
  );
}
