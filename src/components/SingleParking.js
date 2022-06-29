import './SingleParking.css'
import React, { useState, useRef } from 'react';
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';

export default function SingleParking() {
    
    const [takenParking, setTakenParking] = useState('parking')
    const [isChanging, setIsChanging] = useState(true)
    const [largeWindow, setLargeWindow] = useState("")
    const [changeWindow, setIsChangeWindow]=useState(true)
    const [name, setName] = useState("")
    const [pNumber, setPNumber] = useState("")
    const [rNumber, setRNumber] = useState("")
    const [parkingNumber, setParkingNumber] = useState("")
    
    const changeParkingToTaken = () => {
        if(isChanging){
            setTakenParking('takenParking')
            setIsChanging(false) 
            
        }
        else {setTakenParking('parking')
        setIsChanging(true)
        
        }  
    }

    
   const input1 = useRef();
   const input2 = useRef();
   const input3 = useRef();
   const input4 = useRef();
   const onclickMessages = () => {
      setName(input1.current.value)
      setPNumber(input2.current.value)
      setRNumber(input3.current.value)
      setParkingNumber(input4.current.value)
      parkingNumber!=="" ? setLargeWindow(parkingNumber) : setLargeWindow("")
      setIsChangeWindow(true)
   };
   const changeParkingToMediumWindow = () => {
    if (!isChanging){setLargeWindow(<form className="largeWindow">
    <div className='messages'>{name}</div>
    <div className='messages'>{pNumber}</div>
    <div className='messages'>{rNumber}</div>
    </form>
    )}
   }
   const changeParkingToSmallWindow = () => {
    parkingNumber!=="" ? setLargeWindow(parkingNumber) : setLargeWindow("")
   }
    
    const changeParkingToLargeWindow = () => {
        if(changeWindow){
            setLargeWindow(<form className="largeWindow">
                <input ref = {input1}
                placeholder ='Enter name'
                type="text"/>
                <input ref = {input2}
                placeholder='Enter phone number'
                type="text"/>
                <input ref = {input3}
                placeholder='Enter r. number'
                type="text"/>
                <input ref = {input4}
                placeholder='Enter parking number'
                type="text"/>
                <input className='saveButton' onClick={onclickMessages} type="button" value="Zapisz" />
                </form>)
            setIsChangeWindow(false)
        }
        else {
            parkingNumber!=="" ? setLargeWindow(parkingNumber) : setLargeWindow("")
            setIsChangeWindow(true)
        }}
        return(
        <div 
        className={takenParking}
        onClick={changeParkingToTaken}
        onDoubleClick={changeParkingToLargeWindow}
        onMouseEnter={(name!=="" || pNumber!=="" || rNumber!=="" || parkingNumber!=="") ? changeParkingToMediumWindow : ''}
        onMouseLeave={(name!=="" || pNumber!=="" || rNumber!=="" || parkingNumber!=="") ? changeParkingToSmallWindow : ''}
        >
        {largeWindow} 
        </div>
    )
}
