import qr_code from "../../assets/image-qr-code.png"

let QRCodeCard = () => {

    return (
        
<body className="flex flex-col justify-center items-center bg-[#dce5f1] min-h-screen gap-y-4">
  <div className="flex flex-col w-[220px] rounded-[12px] p-[8px] font-[Outfit] bg-[#ffffff]">
    <img className="rounded-[10px] w-full" src={qr_code} alt="QR Code" />    
    <div className="flex flex-col justify-center gap-y-[10px] p-[10px] text-center">
      <h1 className="text-[#3b3f63] font-[700] text-[15px]">
        Improve your front-end skills by building projects
      </h1>
      <p className="text-[#6f7784] font-[400] text-[12px]">
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </p>
    </div>
  </div>
</body>

);
}


export default QRCodeCard;