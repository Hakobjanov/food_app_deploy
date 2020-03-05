import React from "react";
import Main from "../Main/Main";
import SliderPage from "../SliderPage/SliderPage";
import FoodsPage from "./FoodsPage/FoodsPage";
import SingleArticlePage from "./FoodsPage/SingleArticlePage/SingleArticlePage";
import Favourite from '../Favourite/Favourite'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const MainContent = ({
  foodPageArticlesData,
  setCategory,
  category,
  toggleLike
}) => {
  return (

    <Router>
      {/* <Switch> */}
        <Route
          exact
          path="/"
          render = { () => (
            <div>
              <SliderPage/>
              <Main
              foodPageArticlesData={ foodPageArticlesData }
              toggleLike={ toggleLike }
              />
            </div>
          ) }/>

        <Route
          exact
          path="/about"
          render={ () => (
            <h1>About</h1>
          ) }
        />

        <Route
          exact
          path="/foodsPage"
          render={ () => (
            <FoodsPage
              foodPageArticlesData={ foodPageArticlesData }
              filterFn={category ? (article) => article.category === category : Boolean}
              setCategory={ setCategory }
              toggleLike={ toggleLike }
            />
          ) }
        />

        <Route path="/foodsPage/:article" component={SingleArticlePage} />

        <Route
          path="/favourite"
          render={ () => (
            <Favourite
              foodPageArticlesData={foodPageArticlesData}
              filterFn={(article) => article.isLiked}
              toggleLike={toggleLike}
              setCategory={setCategory}
              />
          ) }
        />

        {/* <Route path='/singleArticlePage'
              render={() => (
              <SingleArticlePage
              foodPageArticlesData={this.state.foodPageArticlesData}
              id={this.state.id}
        />)} /> */}
      {/* </Switch> */}
    </Router>
  );
};

// const MainContent = () => {
//     return (
//         <div>
//             <Route exact path='/' component={SliderPage} />
//             <Route exact path='/' component={Main} />
//             <Route path='/foodsPage' component={FoodsPage} />
//             <Route path='/singleArticlePage' component={SingleArticlePage} />
//         </div>
//     )
// }

export default MainContent;
