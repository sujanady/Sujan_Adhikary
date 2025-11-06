import React from 'react'


function Icon({ src, name }) {
    return (
        <>
            <div className="icon bg-white w-44 h-32 ">
                <div className="w-[100%] bg-gray-400">
                <div className="text-black font-bold text-3xl mb-1 text-center pt-1">{name}</div>
                </div>
                <img className='px-1 h-[60%] text-center mx-auto' src={src} alt="" />
            </div>
        </>
    )
}


const Skills = () => {
    return (
        <div className=' h-[100vh] w-[100%] pt-[10vh] bg-slate-900'>
            <div className="box w-[90%] mx-[5%] bg-black h-[80vh] ">
                <div className='text-center text-3xl text-white font-bold'> <span className='text-yellow-400'>Skills</span> and <span className='text-blue-400'>Technology</span> </div>

                <div className="skills w-[95%] mx-auto mt-[3%] items-center  grid grid-cols-4 gap-4">
                    <Icon src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png' name='react' />
                    <Icon src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/330px-Expressjs.png' name='Express.js' />
                    <Icon src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/NodejsStackedDark.svg/330px-NodejsStackedDark.svg.png' name='Node.js' />
                    <Icon src='https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/MongoDB_Fores-Green.svg/375px-MongoDB_Fores-Green.svg.png' name='MongoDB' />
                    <Icon src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/330px-Nextjs-logo.svg.png' name='Next.js' />
                    <Icon src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/225px-Unofficial_JavaScript_logo_2.svg.png' name='JS' />
                    <Icon src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/300px-Tailwind_CSS_logo.svg.png' name='Tailwind' />
                    <Icon src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/330px-GitHub_Invertocat_Logo.svg.png' name='Github' />
                    <Icon src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/182px-Python-logo-notext.svg.png' name='Python' />
                    <Icon src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Html5_css3_styling.svg/180px-Html5_css3_styling.svg.png' name='CSS3' />
                    <Icon src='https://img.icons8.com/?size=50&id=12472&format=png' name='WordPress' />
                    <Icon src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Postman_%28software%29.png/330px-Postman_%28software%29.png' name='POSTMAN' />


                </div>

            </div>
        </div>
    )
}

export default Skills
