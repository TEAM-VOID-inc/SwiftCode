import Typography from './Typography';
import Logo from './Logo';

const Navbar = () => {
      return (
            <div className="Nav" style={{display: 'flex' ,alignItems: 'center'}}>
                  <Logo imgs="60px" m="10px" />
                   <Typography fs="40px" gradient >SwiftCode</Typography>
            </div>
      );
}
 
export default Navbar;