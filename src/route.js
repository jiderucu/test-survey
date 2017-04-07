import React from 'react';
import {
  Router,
  Route,
  hashHistory,
  IndexRoute
} from 'react-router';
import CreatPage from './container/CreatPage';
import MyActivity from './container/MyActivity';
import App from './container/App';
import EditorPage from './container/EditorPage';
import Main from './container/Main';
import CountPage from './container/CountPage';
import StatisticPage from './container/StatisticPage';
import SubPage from './container/SubmitPage';
import BuildPage from './container/BuildPage';
import BallotPage from './container/BallotPage';
import ChoicePage from './container/ChoicePage';
import MultiplePage from './container/MultiplePage';
import EssayPage from './container/EssayPage';
import QuestionPage from './container/QuestionPage';
const route = (
  <Router history={hashHistory} >

      <Route path="/" component={App} >
          <IndexRoute component={MyActivity} />
          <Route path="myActivity" component={MyActivity} />
          <Route path="creatPage" component={CreatPage} />
      </Route>
      <Route>    
            <Route path="editPage" component={EditorPage} />
      </Route>

      
     <Route path="/" component={Main} >
           <IndexRoute component={StatisticPage} />
           <Route path="countPage" component={CountPage} />
           <Route path="submitPage" component={SubPage} />
      </Route>
      <Route path="statisticPage" component={StatisticPage} />
      <Route path="buildPage" component={BuildPage} />
      <Route path="ballotPage" component={BallotPage} />
      <Route path="singlePage" component={ChoicePage} />
      <Route path="multiplePage" component={MultiplePage} />
      <Route path="essayPage" component={EssayPage} />
      <Route path="questionPage" component={QuestionPage} />
  </Router>
);

export default route;