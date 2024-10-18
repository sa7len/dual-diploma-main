import React, { useState } from 'react';
import Input from '../components/Input';
import axios from 'axios';
import Button from '../components/Button';

const Admission = () => {
    const [tempData, settempData] = useState({
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        input5: "",
        files: Array(9).fill(null),
    });

    const onHandleChangeInput = (e) => {
        const { name, value } = e.target;
        settempData(prevData => ({
            ...prevData, [name]: value
        }));
    };

    const onHandleFile = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
             const base64string=  reader.result
                const newFiles = [...tempData.files]; 
                newFiles[index] = base64string; 
                settempData(prevData => ({
                    ...prevData,
                    files: newFiles,
                }));
            };
            reader.readAsDataURL(file); 
        }
    };



    const melumatiGonder = () => {
        const anyobject = {
            id: "8278df9b-4ca6-482b-bf03-4b1be8d321d7",
            name: tempData.input1,
            surname: tempData.input2,
            number: tempData.input3,
            gender: tempData.input4,
            email: tempData.input5,
            files: tempData.files, 
        };

        console.log("Gönderilen veri:", anyobject);
        axios.post("https://fakestoreapi.com/products", anyobject)
            .then((res) => {
                console.log("API'den gelen cevap:", res.data);
                settempData({
                    input1: "",
                    input2: "",
                    input3: "",
                    input4: "",
                    input5: "",
                    files: Array(9).fill(null), 
                });
            })
            .catch((err) => console.error("API xetasi:", err));
    };

    return (
        <>
            <div className="bg-container">
                <div className='login-container'>
                    <h2 className='login-title'>Pre-Admission Application</h2>
                    <div className="input-container">
                        <Input 
                            className="login-input"
                            name="input1" 
                            value={tempData.input1} 
                            onChange={onHandleChangeInput} 
                            placeholder="Adınız..."
                        /> 
                        <Input 
                            className="login-input" 
                            name="input2" 
                            value={tempData.input2} 
                            onChange={onHandleChangeInput} 
                            placeholder="Soyadınız..."
                        />
                        <Input 
                            className="login-input" 
                            name="input3" 
                            value={tempData.input3} 
                            onChange={onHandleChangeInput} 
                            placeholder="Telefon nömrəsi..."
                        />
                        <Input 
                            className="login-input" 
                            name="input4" 
                            value={tempData.input4} 
                            onChange={onHandleChangeInput} 
                            placeholder="Cinsiniz..."
                        />
                        <Input 
                            className="login-input" 
                            name="input5" 
                            value={tempData.input5} 
                            onChange={onHandleChangeInput} 
                            placeholder="E-posta..."
                        />
                        
                        {Array.from({ length: 9 }, (_, index) => (
                            <div key={index} className="file-input">
                                <input 
                                    type="file" 
                                    onChange={(e) => onHandleFile(e, index)} 
                                    accept="*/*" 
                                />
                            </div>
                        ))}
                        
                        <Button 
                            className="login-button" 
                            btnText="Müraciət et" 
                            onClick={melumatiGonder} 
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admission;



