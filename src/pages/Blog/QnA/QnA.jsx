import React from 'react';
import qnaImg from '../../../assets/images/questions.png';

const QnA = () => {
    return (
        <div className='w-full p-0 lg:w-9/12 mx-auto px-4 lg:px-0 my-10 lg:my-20 flex flex-col-reverse lg:flex-row gap-8 items-center justify-between'>
            <div className='w-auto lg:w-2/3'>
                <div className="collapse collapse-arrow bg-gradient-to-t from-[#7e8ffe14] from-50% to-transparent text-zinc-900 shadow-md">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-md lg:text-xl font-bold">
                        When should you use context API?
                    </div>
                    <div className="collapse-content">
                        <p>The ContextAPI is used generally for avoiding props drilling. We should use ContextAPI whenever we need to access data from nested components or anywhere in the component tree and reduces coding redundancy.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-gradient-to-t from-[#7e8ffe14] from-50% to-transparent text-zinc-900 shadow-md">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-md lg:text-xl font-bold">
                        What is a custom hook?
                    </div>
                    <div className="collapse-content">
                        <p>A Custom Hook is a javascript function that is created by developers for spacial purpose of coding. We can reuse it in any components like react's built-in hooks. To create a custom hook, we should follow the convention so that it will indicate that it is a custom hook.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-gradient-to-t from-[#7e8ffe14] from-50% to-transparent text-zinc-900 shadow-md">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-md lg:text-xl font-bold">
                        What is useRef?
                    </div>
                    <div className="collapse-content">
                        <p>useRef is a react hook that is similar as useState but it is used when there is no need to render when a value changes.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-gradient-to-t from-[#7e8ffe14] from-50% to-transparent text-zinc-900 shadow-md">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-md lg:text-xl font-bold">
                        What is useMemo?
                    </div>
                    <div className="collapse-content">
                        <p>useMemo is a react hook that is used to optimize performance and unnecessary rerendering.</p>
                    </div>
                </div>
            </div>
            <div className='w-auto lg:w-1/2'>
                <img src={qnaImg} alt="" />
            </div>
        </div>
    );
};

export default QnA;