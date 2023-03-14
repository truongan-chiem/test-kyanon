import {BsCheck} from 'react-icons/bs'
import './CheckBox.scss'


interface PropCheckBox{
  showPw : boolean,
  setShowPw : Function
}


const CheckBox  = ({showPw,setShowPw} : PropCheckBox) =>{
  return(
    <div className='checkbox' onClick={() => setShowPw((prev : boolean)  => !prev)}>
        <div className={`box ${showPw && 'isCheck'}`}>
          {showPw ?
          <BsCheck />
            :
            <></>
        }
        </div>
        <p>Show password</p>
    </div>
  )
}
export default CheckBox;