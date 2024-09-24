
const Button = ({isResponsive , title , click}) => {
  return (
    <div>
     <button className={isResponsive ? null :'p-2 px-3 rounded-3xl bg-[#8FD14F] active:translate-y-[1px]'} onClick={click}>{title}</button> 
    </div>
  )
}

export default Button;
