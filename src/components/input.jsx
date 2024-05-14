import style from './input.module.css';

function Input_cal({displayval}){
  return <div className='display'>
  <input type='text' className={style.input} value={displayval}></input>
</div>
}

export default Input_cal;