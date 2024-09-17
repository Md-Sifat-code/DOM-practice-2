document.getElementById('button2').addEventListener('click',function(){
    const input1 = document.getElementById('input-1');
    const input_1 = input1.value ;
    const input2 = document.getElementById('input-2');
    const input_2 = input2.value ;
    const input3 = document.getElementById('input-3');
    const input_3 = input3.value ;
    const input4 = document.getElementById('input-4');
    const input_4 = input4.value ;
    // combine all inputs
    const combinedInput = 
    `User is Searching For: ${input_1}\n\n` +
    `Email is: ${input_2}\n\n` +
    `Username is: ${input_3}\n\n` +
    `Password: ${input_4}\n\n`;
    const blob = new Blob([combinedInput],{ type: 'text/plain'});
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'user_input.txt';
    link.click();
    input1.value = '';
    input2.value = '';
    input3.value = '';
    input4.value = '';
})

document.getElementById('button').addEventListener('click',function(){
    const input1 = document.getElementById('input-1');
    const input_1 = input1.value ;
    const input2 = document.getElementById('input-2');
    const input_2 = input2.value ;
    const input3 = document.getElementById('input-3');
    const input_3 = input3.value ;
    const input4 = document.getElementById('input-4');
    const input_4 = input4.value ;
    const cng = document.getElementById('change');
    const images = document.getElementById('image');

    if(input_1 =="Dhaka" && input_2 == "2015tasif@gmail.com" && input_3 == "HEX-Sifat" && input_4 == "jibon32501"){
        
        cng.innerText = 'Hey Login Successfull'
        images.classList.remove('hidden')
        
    }else{
        cng.innerText = 'Give your Details perfectly'
    }
    cng.style.color = 'blue';
    cng.style.fontStyle = 'bold'
})