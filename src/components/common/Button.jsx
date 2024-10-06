
const Button = ({isResponsive , title , click , clas}) => {
  return (
    <div>
     <button className={isResponsive ? null : clas} onClick={click}>{title}</button> 
    </div>
  )
}

export default Button;
