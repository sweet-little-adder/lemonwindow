function AboutUs() {
    return (
        <div className="flex-col h-screen w-screen">
            <div className="relative mt-9 mx-auto flex justify-center h-fit w-fit">
                <div
                    className="absolute z-10 space-y-12 font-bold text-[#ffefee]/ text-[#898989] text-white/ text-[#ee8888]/ text-6xl text-center font-lemonada text-stroke/   
                        drop-shadow-[3.5px_2px_0px_rgba(200,299,299,1)] drop-shadow-md"
                >
                    <p className="flex items-center justify-center text-5xl mb-[-20px]">
                        #<h1>1</h1>
                    </p>
                    Cleaning
                    <br /> Agency
                </div>
                {/* rounded-full outline-[500px] custom-dashed-border/ outline-dashed
            outline-[#ff0069] p-6 w-0 h-0 bg-[#ff0069]" */}
                {/* <div className="absolute top-0 sun-ray w-screen rounded-full h-screen"></div> */}

                <div className="z-0 absolute w-[260px] h-[260px] bg-[#ffffcc]/20 rounded-full border-[#ffcccc]/90 border-[40px]">
                    {" "}
                    <div className="z-0 absolute top-1/2 translate-x-1/2 -translate-y-1/2 right-1/2 w-[60px] h-[60px] bg-[#ffcccc]/90 rounded-full /border-[#ffcccc]/90 /border-[40px]"></div>
                </div>
            </div>{" "}
            <div className="w-2/3 mx-auto mt-[350px]  text-[#898989] tracking-wider">
                <p className="flex ">
                    At Lemon Windows, we know your time is valuable—that’s why
                    we specialize in delivering fast, efficient, and
                    high-quality cleaning services. From gleaming windows to
                    spotless floors, our team’s dedication to excellence is
                    matched only by our commitment to speed. Our advanced
                    cleaning techniques and experienced team mean you get
                    impeccable results without the wait.{" "}
                </p>
                <br />
                <p>
                    Whether it’s a routine service or a last-minute call, Lemon
                    Windows provides an experience that’s both efficient and
                    meticulous. Our customers trust us to leave their spaces
                    fresh, bright, and inviting, all in a fraction of the time.
                    When you want a cleaning service that respects your schedule
                    as much as your home or office, choose Lemon Windows—
                    <br />
                    <br />
                    <p className="text-5xl text-[#555555] w-2/3 border border-[1rem] border-[#ffc9c9] p-5 mx-auto flex-wrap font-bold">
                        the bright choice for fast, <br />
                        flawless cleaning.
                    </p>
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
