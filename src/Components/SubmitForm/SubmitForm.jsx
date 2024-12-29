import '../../Components/SubmitForm/SubmitForm.css'
const SubmitForm = () => {
    return (
        <div className='translate-y-16 z-10 '>

            <div className="mt-12 rounded-2xl" >
                <div className='space-y-4 w-2/3 h-80 mx-auto bgForm p-18 pt-24 rounded-2xl '>
                    <h3 className='text-4xl font-bold'>Subscribe to our Newsletter</h3>
                    <p className='text-xl'>Get the latest updates and news right in your inbox!</p>
                    <div >
                        <input type="email" placeholder="Enter Your Email" className="px-10 py-2 rounded-xl mr-5" />
                        <button className='px-4 py-2 active rounded-lg'>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SubmitForm;