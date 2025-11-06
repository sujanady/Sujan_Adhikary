import React from 'react'


const About = () => {
    return (
        <div className=' h-[250vh] w-[100%] bg-slate-900 pd-[10vh] '>


            <div className="About w-[90%] mx-auto mt-[10vh] px-[5%] py-10 bg-gradient-to-b from-slate-950 to-black rounded-3xl shadow-inner">
                {/* Section Title */}
                <div className="flex justify-center items-center gap-3 mb-10">
                    <span className="material-icons text-6xl text-blue-400">person</span>
                    <h2 className="text-4xl font-semibold text-white tracking-wide">
                        About <span className="text-yellow-400">Me</span>
                    </h2>
                </div>

                {/* Content */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                    {/* Profile Picture (optional) */}
                    <img
                        src="/my.png" // Add your image in /public folder
                        alt="Sujan Adhikary"
                        className="w-36 h-36 rounded-full object-cover shadow-lg border-4 border-yellow-400"
                    />

                    {/* Text Section */}
                    <div className="space-y-3 text-center sm:text-left max-w-3xl">
                        <h3 className="text-3xl font-bold text-yellow-400">I'm Sujan Adhikary</h3>
                        <p className="text-2xl text-blue-400">Full Stack Developer</p>
                        <p className="text-2xl text-blue-400">Working at Tata Consultancy Services</p>
                        <p className="text-lg text-yellow-300">
                            <span className="font-semibold">Email:</span> sujanady@gmail.com
                        </p>
                        <p className="text-white text-lg leading-relaxed">
                            I am a passionate Full Stack Developer specializing in modern web technologies.
                            I enjoy building interactive, scalable applications and continuously learning
                            about new frameworks and tools that make the web more dynamic and efficient,
                            currently working at Tata Consultancy Services.
                        </p>
                    </div>
                </div>
            </div>







            {/* Work Experiance */}
            <div className="Work w-[90%] mx-auto px-[5%] mt-[10vh] py-10 bg-gradient-to-b from-slate-950 to-black rounded-3xl shadow-inner">
                {/* Section Title */}
                <div className="flex justify-center items-center gap-3 mb-10">
                    <span className="material-icons text-6xl text-blue-400">work</span>
                    <h2 className="text-4xl font-semibold text-white tracking-wide">
                        Work Experiance
                    </h2>
                </div>

                {/* Work Card */}
                <div className="flex flex-col sm:flex-row items-center gap-8 bg-gradient-to-r from-slate-800 to-slate-900 p-8 rounded-2xl shadow-xl transition-transform hover:scale-[1.02] hover:shadow-2xl">
                    {/* Company Logo */}
                    <img
                        className="w-32 sm:w-40 h-auto bg-white p-3 rounded-xl shadow-md object-contain"
                        src="/TCS.png"
                        alt="TCS Logo"
                    />

                    {/* Details */}
                    <div className="text-center sm:text-left space-y-3">
                        <p className="text-2xl sm:text-3xl font-bold text-yellow-400">
                            Analyst at Tata Consultancy Services
                        </p>
                        <p className="text-lg sm:text-2xl text-blue-300 italic">
                            December 2024 – Present
                        </p>

                        <p className="text-white text-lg sm:text-xl leading-relaxed max-w-3xl">
                            As an Analyst at TCS, I work on developing data-driven solutions, analyzing system performance,
                            and contributing to innovative AI-driven automation projects. I focus on optimizing workflows
                            and delivering insights that enhance business efficiency.
                        </p>
                    </div>
                </div>
            </div>





            {/* Education */}
            <div className="Education w-[90%] mx-auto mt-[10vh] px-[5%] py-10 bg-gradient-to-b from-slate-950 to-black rounded-3xl shadow-inner">
                {/* Section Title */}
                <div className="flex justify-center items-center gap-3 mb-10">
                    <span className="material-icons text-6xl text-blue-400">school</span>
                    <h2 className="text-4xl font-semibold text-white tracking-wide">Education</h2>
                </div>

                {/* University Card */}
                <div className="flex flex-col sm:flex-row items-center gap-8 bg-gradient-to-r from-slate-800 to-slate-900 p-8 rounded-2xl shadow-xl transition-transform hover:scale-[1.02] hover:shadow-2xl">
                    {/* Logo */}
                    <img
                        className="w-32 sm:w-40 h-auto bg-white p-3 rounded-xl shadow-md object-contain"
                        src="/makaut.png"
                        alt="MAKAUT Logo"
                    />

                    {/* Details */}
                    <div className="text-center sm:text-left space-y-3">
                        <p className="text-2xl sm:text-3xl font-bold text-yellow-400">
                            Maulana Abul Kalam Azad University of Technology (MAKAUT, WB)
                        </p>
                        <p className="text-lg sm:text-2xl text-blue-300 italic">
                            (Formerly Known as West Bengal University of Technology)
                        </p>

                        <div className="pt-4 space-y-1 text-white">
                            <p className="text-xl sm:text-2xl">
                                <span className="font-semibold">Degree:</span> B.Sc in Information Technology (Artificial Intelligence)
                            </p>
                            <p className="text-xl sm:text-2xl">
                                <span className="font-semibold">Year:</span> 2021 – 2024
                            </p>
                            <p className="text-xl sm:text-2xl">
                                <span className="font-semibold">CGPA:</span> 8.53
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
