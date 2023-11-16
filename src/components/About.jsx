import React from 'react'

const About = () => {
    return (
        <div name="about"
         className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            {/* 1st div */}
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                {/* 2nd div */}
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ad natus dolores qui. Repellendus eaque earum neque nobis quasi, aliquid quam asperiores fuga nam ullam deleniti laudantium perferendis perspiciatis blanditiis autem optio temporibus non eum voluptas nisi aperiam? Consequatur ipsa tempore, accusamus iure velit cum rerum impedit animi ab facere.
                </p>
                {/* line break */}
                <br />
                <p className='text-xl'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam impedit autem repellendus hic nihil corporis numquam explicabo, quod ea consectetur. Quis quia ducimus fugit, ea perspiciatis, est deleniti neque in ab quod nesciunt labore accusantium nostrum possimus! Quia dicta alias consequuntur tempore impedit cupiditate earum aperiam nulla ad iusto?
                </p>

            </div>
        </div>
    )
}

export default About
