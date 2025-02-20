import React,{useState,useEffect,useRef} from 'react'

const Component3 = () => {
  const [showModal,setshowModal]=useState(false);

  const dialogRef = useRef(null);

  useEffect(()=>{
    if(showModal){
      dialogRef.current?.showModal()
    }
    else{
      dialogRef.current?.close()
    }
  },[showModal])
  return (
    <div>
      Модалка
      <button onClick={()=>{setshowModal(true)}}>+</button>
      <dialog ref={dialogRef}>
        Подробная инфа без слайдера
        <button onClick={()=>{setshowModal(false)}}>Закрыть</button>
      </dialog>
    </div>
  )
}

export default Component3
