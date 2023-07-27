import React from 'react'


const Card = ({img,skills,title,description,links}) => {
  return (
    <div className='card'>
    <div className="card_top">
        <img src={img} alt="" />
    </div>
      <div className="card_bottom">
          <div className="card_bottom_skill">
              {
                skills.map((item)=>{
                    return(
                        <span>{item}</span>
                    )
                })
              }
              
          </div>
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="card_bottom_buttons">
            {
                links.map((item)=>{
                    return (
                    <a href={item.link}>{item.title}</a>
                    )
                })
            }
          </div>
      </div>
  </div>
  )
}

export default Card