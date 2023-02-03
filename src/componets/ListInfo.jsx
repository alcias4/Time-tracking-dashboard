import { useEffect } from 'react';
import './info.css'

export function ListInfo({datos,filData, past}){
    const iconos = ['icon-work.svg', 'icon-play.svg', 'icon-study.svg', 'icon-exercise.svg', 'icon-social.svg', 'icon-self-care.svg']
    const colores = ['hsl(15, 100%, 70%)', 'hsl(195, 74%, 62%)','hsl(348, 100%, 68%)', 'hsl(145, 58%, 55%)', 'hsl(264, 64%, 52%)', 'hsl(43, 84%, 65%)'];
    

    return <div className="cards">
        {datos.map((e,i)=>{
            return <div className='contenCards' key={i}>
                <section style={{background: `${colores[i]}`}} className="logo">
                    <img src={'./images/' + iconos[i]} alt="icon" />
                </section>
                <section className="conteInfo">
                    <div className='titleHora'>
                        <label className='name-cards'>{e.title}</label>
                        <label className='name-horas'>{filData != false? filData[i].current: null}hrs</label>
                    </div>
                    <div className='lastH'>
                        <label className='points'>...</label>
                        <label className='n'>{past}</label>
                        <label className='t' > - {filData != false? filData[i].previous: null}hrs</label>
                    </div>
                </section>
            </div>
        })}
    </div>
}

