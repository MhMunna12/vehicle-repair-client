
const About = () => {
    return (
        <div >
            <div className="text-center">
                <h1 className=' font-bold text-5xl'>About us</h1>
                <div className="divider divider-accent max-w-[280px] mx-auto"></div>
            </div>
            <div className="max-w-[1020px] mx-auto">
                <div className=" hero-content flex-col lg:flex-row">
                    <div className="lg:w-1/2 relative">
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    </div>
                    <div className="lg:w-1/2 ">

                        <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. .</p>
                        <p className="py-2">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                        <button className="btn btn-error">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About