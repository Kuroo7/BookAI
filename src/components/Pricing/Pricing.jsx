import "./pricing.css";
// eslint-disable-next-line react/prop-types
const Pricing = ({ darkMode }) => {
  
  return (
    <>
    
   
      <div className=" h-auto w-full flex items-center justify-center ">
        <div className={ `${darkMode?"bg-[#1e293b]":"bg-gray-200"} h-full m-6 md:w-[62%] w-11/12 rounded-lg pricing-container p-8 `}>
          <h2 className={`mt-8 text-2xl font-bold font-sans ${
            darkMode ? "text-[#a5b4fc]" : "text-indigo-600"
          }`} >API Pricing</h2>
          <p className={` ${darkMode?'text-white':"text-gray-800"}  text-[1.09rem]`} >
            Our API pricing is based on the model used and the number of tokens
            processed. Heres a breakdown of the costs:
          </p>
          

<div className="relative overflow-x-auto  w-full  ">
    <table className={`w-full text-left overflow-hidden rounded-lg text-xs md:text-sm border-[#334155] ${
              darkMode ? "text-white" : "text-gray-800"
            } mt-4 border border-separate border-spacing-0`}>
        <thead className={`font-semibold font-sans uppercase ${
                darkMode ? "bg-[#6366f1] text-white" : "bg-indigo-200 text-gray-800"
              } p-4`}>
            <tr>
                <th scope="col" className="p-4">
                    API
                </th>
                <th scope="col" className="p-4">
                    MODEL
                </th>
                <th scope="col" className="p-4">
                    PRICE PER 1K TOKEN
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="">
                <td scope="row" className="px-6 py-4 font-medium border border-t-0 border-l-0 border-r-0 border-b-[#334155]">
                OpenAI
                </td>
                <td className="px-6 py-4 border border-t-0 border-l-0 border-r-0 border-b-[#334155]">
                GPT-3.5
                </td>
                <td className="px-6 py-4 border border-t-0 border-l-0 border-r-0 border-b-[#334155]">
                $0.002
                </td>
               
            </tr>
            <tr className=" ">
                <td scope="row" className="px-6 py-4 font-medium border border-t-0 border-l-0 border-r-0 border-b-[#334155] ">
                OpenAI
                </td>
                <td className="px-6 py-4 border border-t-0 border-l-0 border-r-0 border-b-[#334155]">
                GPT-4
                </td>
                <td className="px-6 py-4 border border-t-0 border-l-0 border-r-0 border-b-[#334155]">
                $0.03
                </td>
               
       	
		
		
            </tr>
            <tr className="">
                <td scope="row" className="px-6 py-4 font-medium border border-t-0 border-l-0 border-r-0 border-b-[#334155]">
                Together AI
                </td>
                <td className="px-6 py-4 border border-t-0 border-l-0 border-r-0 border-b-[#334155]">
                Llama-2-70b
                </td>
                <td className="px-6 py-4 border border-t-0 border-l-0 border-r-0 border-b-[#334155]">
                $0.0008
                </td>
                
            </tr>
            <tr className="border border-b-[#334155]">
                <td scope="row" className="px-6 py-4 font-medium">
                Together AI
                </td>
                <td className="px-6 py-4">
                Llama-2-13b
                </td>
                <td className="px-6 py-4">
                $0.0006 
                </td>
                
            </tr>
        </tbody>
    </table>
</div>

          <h2 className={`mt-8 text-[1.17rem] font-bold font-sans ${
            darkMode ? "text-[#a5b4fc]" : "text-indigo-600"
          }`}>Token Estimation</h2>
        <p className={`${darkMode ? "text-white" : "text-gray-800"} text-[1.1rem]`}>On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>
          <h2 className={`mt-8 text-[1.17rem] font-bold font-sans ${
            darkMode ? "text-[#a5b4fc]" : "text-indigo-600"
          }`}>Billing</h2>
          <p className={`${darkMode ? "text-white" : "text-gray-800"} text-[1.1rem]`} >You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
        </div>
      </div>
    </>
  );
};

export default Pricing;
