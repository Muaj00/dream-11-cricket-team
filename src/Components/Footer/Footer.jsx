import logo from '../../assets/logo-footer.png';

const Footer = () => {
    return (
        <div className="z-0 ">
            <footer className="h-96  footerBg text-base-content rounded-2xl">
                
                <div className='translate-y-28 mb-10'>
                    <img className='mx-auto' src={logo} alt="" />
                </div>
                <div className=" footerBg border-b-2 footer bg-base-200 text-base-content p-10 flex justify-evenly h-96 items-center">

                    <nav className='text-slate-400'>
                        <h6 className="text-xl font-bold">About Us</h6>
                        <p className="w-44 text-start ">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </nav>
                    <nav className='text-slate-400'>
                        <h6 className="text-xl font-bold">Quick Links</h6>
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">Service</a>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Contactt</a>
                    </nav>

                    <form>
                        <h6 className="text-xl font-bold text-slate-400">Subscribe</h6>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="text-slate-400 label-text">Subscribe to our newsletter for the latest updates.</span>
                            </label>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="Enter Your Email"
                                    className="input input-bordered join-item" />
                                <button className="btn active join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className=" footerBg h-10 footer bg-base-200 text-base-content p-10 justify-center">
                    <p className="text-slate-400"> @2024 Md. Muaj Chowdhury All Rights Reserved. </p>
                </div>

            </footer>
        </div>
    );
};

export default Footer;