import style from './button.module.css';

function Button_cal({buttonclick}){

  let b=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','.','0']
  return <div className='button-cal'>
      {b.map((item)=>(<button className={style.button} key={item}  onClick={()=> buttonclick(item)}>{item}</button>))}
  
  
  
  </div>
}

export default Button_cal;