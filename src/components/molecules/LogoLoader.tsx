import logo from '/public/assets/Logo.png';
import { PropagateLoader } from 'react-spinners';

const LogoLoader = () => {
     return (
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-600 gap-4">

               {/* Static Logo */}
               <img src={logo} className="w-52" alt="Logo" />
               {/* Spinner from react-spinners */}
               
               <PropagateLoader loading={true} color="#4299E1" size={15}/>
          </div>
     );
};

export default LogoLoader;
