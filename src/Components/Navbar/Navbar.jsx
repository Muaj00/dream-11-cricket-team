import logo from '../../assets/logo.png';
import banner from '../../assets/banner-main.png';
import '../Navbar/Navbar.css'

const Navbar = ({balence, handleAddRecharge}) => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <img src={logo} />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                    </ul>

                    <div className='ms-6'>
                        <p className='px-8 py-2 border rounded-lg font-bold'>{balence} Coin</p>
                    </div>
                </div>
            </div>


            <div className='bg-image pb-16 space-y-8 items-center pt-8 mt-8'>
                <img className='mx-auto' src={banner}/>
                <h3 className='text-4xl text-white font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h3>
                <p className='text-2xl font-medium text-white opacity-70'>Beyond Boundaries Beyond Limits</p>
                <div className=' '>
                    <button onClick={handleAddRecharge} className='active btn font-bold border border-color'>Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;