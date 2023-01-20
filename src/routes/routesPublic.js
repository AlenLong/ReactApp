import { Error404 } from '../components/Error404'
import { Home } from '../components/Home'
import { ShowHideMessage2 } from '../components/myPractices/ShowHideMessage2'
import { ProgressBar } from '../components/ProgressBar'
import { ShowHideMessage } from '../components/ShowHideMessage'
import { StopwatchTimer } from '../components/StopwatchTimer'
import { ShowHideMessageMiPractica } from '../components/myPractices/ShowHideMessageMiPractica'
import { ProgressBar2 } from '../components/myPractices/ProgressBar2'


export const routesPublic =  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/showHideMessage",
      element: <ShowHideMessage />,
    },
    {
      path: "/myPractice/showHideMessage",
      element: <ShowHideMessage2 />,
    },
    {
      path: "/myPractice/showHideMessageMiPractica",
      element: < ShowHideMessageMiPractica/>,
    },
    {
      path: "/myPractice/progressBar2",
      element: < ProgressBar2/>,
    },
    {
      path: "/progressBar",
      element: <ProgressBar />,
    },
    {
      path: "/stopwatchTimer",
      element: <StopwatchTimer />,
    },
    {
      path: "/*",
      element: <Error404 />,
    }
  ]