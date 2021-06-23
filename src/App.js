import React from "react";
import MyRoute from "./Routes/MyRoute";
import { AppContextProvider } from "./Hooks/useAppContext";
import Router from "../src/Router";
const App = () => {
  return (
    <AppContextProvider>
      <Router />
    </AppContextProvider>
  );
};

export default App;
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Notes from "./Pages/Notes";
// import Create from "./Pages/Create";
// import { createMuiTheme, ThemeProvider } from "@material-ui/core";
// import { purple } from "@material-ui/core/colors";
// import Layout from "./components/Layout";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Profile from "./Pages/Profile";
// import Post from "./Pages/Post";

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#fefefe",
//     },
//     secondary: purple,
//   },
//   typography: {
//     fontFamily: "Quicksand",
//     fontWeightLight: 400,
//     fontWeightRegular: 500,
//     fontWeightMedium: 600,
//     fontWeightBold: 700,
//   },
// });

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Router>
//         <Layout>
//           <Switch>
//             {/* <Route exact path="/">
//               <Home />
//             </Route>
//             <Route path="/about">
//               <About />
//             </Route>
//             <Route path="/profile">
//               <Profile />
//             </Route>
//             <Route path="/post/:id">
//               <Post />
//             </Route> */}
//             <Switch>
//               <Route path="/" component={Home} exact />
//               <Route path="/about" component={About} />
//               <Route path="/profile">
//                 <Profile />
//               </Route>
//               <Route path="/post/:id" component={Post} />
//             </Switch>
//           </Switch>
//         </Layout>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;
