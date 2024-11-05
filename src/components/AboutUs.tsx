function AboutUs() {
    return (
        <div className="relative mt-9 mx-auto flex justify-center ">
            <div
                className="absolute z-10 space-y-12 font-bold text-[#ffefee]/ text-white/ text-[#ee8888] text-6xl text-center font-lemonada text-stroke/   
                        drop-shadow-[3.5px_2px_0px_rgba(200,299,299,1)] drop-shadow-md"
            >
                <p className="flex items-center justify-center text-5xl mb-[-20px]">
                    #<h1>1</h1>
                </p>
                Cleaning
                <br /> Agency
            </div>
            {/* <div className="absolute top-9 sun-ray w-screen h-screen bg-[#ff0069]"></div> */}
            <div className="z-0 absolute w-[260px] h-[260px] bg-[#ffffcc]/25 rounded-full border-[#ffcccc]/50 border-[40px]"></div>
        </div>
    );
}

export default AboutUs;
