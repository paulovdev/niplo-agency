"use client"

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
    return (
        <button
            id={id}
            className={`relative mt-8 px-6 pr-5 py-2 ${containerClass} rounded-full text-color  flex items-center gap-3  cursor-pointer overflow-hidden`}>
            {leftIcon}
            <span className='font-chivo text-color font-[600] text-[.8rem] '>
                {title}
            </span>
            {rightIcon}
        </button>
    )
}

export default Button;