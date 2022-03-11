import React, { useState } from 'react';


const ComposeMail = () => {

    const [data, setData] = useState('');
    const handleChange = (e) => {
        setData(e.target.value);
    }

    return (
        <div className="composeMailWrap bg-light">
            <input type='email' className='mailBoxInput mb-4' placeholder='To'/>
            <textarea rows={8} value={data} onChange={handleChange} className='mailBoxInput mb-4' placeholder='Type your Email Message'></textarea>
            <input type='submit' value='Send' className='btn btn-sm btn-success rAdmin_PBTN'/>
        </div>
    )
}

export default ComposeMail