import React,{useState} from 'react'


 
 

    const Email = () => {
      const [email, setEmail] = useState('');
      const [message, setMessage] = useState('');
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Message:', message);
        setEmail('');
        setMessage('');
      };
    
      return (
        <div className=" max-w-lg mx-auto mt-16 p-6 bg-white rounded-md shadow-md">
          <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className=" text-gray-600 mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className=" text-gray-600 mb-2">
                Message:
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      );
    };
    
   
    
  


export default Email