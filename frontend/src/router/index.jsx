// src/router/index.js

import { createBrowserRouter, redirect } from 'react-router-dom'
import Landing from '../pages/Landing/Landing'
import Signup from '../pages/Signup/Signup'
import Home from '../pages/Home/Home'
import Index from '../layout/index'
import NewTournament from '../pages/NewTournament/NewTournament'
import NewTeam from '../pages/NewTeam/NewTeam'
/* import User from "../pages/User"; */

/* import TrainerCard from '../pages/TrainerCard/TrainerCard' */

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/Signup',
        element: <Signup />,
      },
      {
        path: '/Home',
        element: <Home />,
        
      },
           {
        path: '/NewTournament',
        element: <NewTournament />,
      },
      {
        path: '/NewTeam',
        element: <NewTeam />,
      }, 
            /* {
        path: '/JoinTournament',
        element: <JoinTournament />,
        children: [
              {
            path: '/SelectTeam',
            element: <SelectTeam />,
                },
              {
            path: '/TournamentPage',
            element: <TournamentPage />,
                }
        ]
            }, 
            {
        path: '/HallOfFame',
        element: <HallOfFame />,
            },                       

           {
        path: '/MyTeams',
        element: <MyTeams />,
            }                      
            */
    ],
  },
])


export default router
