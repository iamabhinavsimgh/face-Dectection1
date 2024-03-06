//https://teachablemachine.withgoogle.com/models/QHClCF_Bp/

Webcam.set({
    width: 350,
    height: 300,
    image_format:"png",
    png_quality:100

})

camera=document.getElementById("camera")
Webcam.attach("#camera")