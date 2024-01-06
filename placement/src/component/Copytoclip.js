import React, { useRef } from 'react';
import prompt from '../Api/Prompts'
import '../copytoclip.css'
import { Helmet } from 'react-helmet';

const CopyToClipboardCard = ({ text }) => {
    const textRef = useRef(null);

    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(textRef.current.innerText);
            console.log('Text copied to clipboard!');
        } catch (err) {
            console.error('Unable to copy text to clipboard:', err);
        }
    };

    return (
        <div className='container'>
            <Helmet>
                <title>
                    interviewprompt
                </title>
            </Helmet>
            <div className="card">
                <div ref={textRef} className="card-text">
                    {text}
                </div>
                <button onClick={handleCopyClick}><span>Copy to Clipboard</span></button>
            </div>
        </div>
    );
};

const Copytoclip = () => {
    return (
        <div className='outer'>
            <div className='container'>

                <h1>Interview Prompts</h1>
                <h3>Steps to use these promts:-</h3>
                <h5>
                    <ol>
                        <li>First copy the prompt from 'Copy to Clipoard' button.</li>
                        <li>Open <a href="https://chat.openai.com/"> Chat gpt</a> in another window.</li>
                        <li>Paste the prompt in chat gpt and customize it accordingly.</li>
                        <li>Then, follow the chat gpt instructions and prepare for your upcoming interviews.</li>
                    </ol>
                </h5>

                <br></br>
                {
                    prompt.map((item) =>

                        <div>
                            <CopyToClipboardCard text={item.prompt} />
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Copytoclip;
