import React from 'react'

const Title = ({title , subTitle , align , font}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align === "left" && "md:items-start md:text-left"} `}>
        <h1 className={`text-4xl md:text-[40px] font-bold ${font ||"font-payfair"}`}>{title}</h1>
        <p className='text-xl md:text-xl  mt-4 max-w-174'>{subTitle}</p>
    </div>
  )
}

export default Title;