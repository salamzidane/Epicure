import SetWindowSize from '../../../helpers/SetWindowSize';
import HomePageDesktop from '../homePageDesktop/HomePageDesktop'
import HomePageMobile from '../homePageMobile/HomePageMobile'


export default function HomePage() {

  const windowSize = SetWindowSize();

  return (
    <div>
      {windowSize > 600 ?

        <HomePageDesktop />

        : < HomePageMobile />
      }
    </div>

  )
}