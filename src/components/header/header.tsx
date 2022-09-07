import SetWindowSize from '../../helpers/SetWindowSize';
import HeaderDesktopContainer from '../header/headerDesktop/HeaderDesktop';
import HeaderMobileContainer from '../header/headerMobile/HeaderMobile';


export default function Header() {

  const windowSize = SetWindowSize();

  return (
    <div>
      {windowSize > 600 ?

        <HeaderDesktopContainer />

        : < HeaderMobileContainer />
      }
    </div>

  )
}