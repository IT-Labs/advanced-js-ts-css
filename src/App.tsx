import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Navigation from "./components/directives/Navigation";
import Home from "./components/pages/Home";
import VarLetConst from "./components/pages/VarLetConst";
import AccessingObjectProperties from "./components/pages/AccessingObjectProperties";
import IfElseSwitch from "./components/pages/IfElseSwitch";
import VariableTypes from "./components/pages/VariableTypes";
import Arrays from "./components/pages/ArrayMethods";
import SpreadRestDestructuring from "./components/pages/SpreadRestDestructuring";
import ShallowDeepCopy from "./components/pages/ShallowDeepCopy";
import NamedAndDefaultExports from "./components/pages/NamedAndDefaultExports";
import TypeScriptIntro from "./components/pages/TypeScriptIntro";
import TypeInference from "./components/pages/TypeInference";
import TypeAssertions from "./components/pages/TypeAssertions";
import UnionTypes from "./components/pages/UnionTypes";
import Generics from "./components/pages/Generics";
import CssSelectors from "./components/pages/CssSelectors";
import CssSelectorsExamples from './components/pages/CssSelectorsExamples';
import CssPosition from "./components/pages/CssPosition";
import CssPositionExamples from "./components/pages/CssPositionExamples";
import CssDisplay from "./components/pages/CssDisplay";
import CssDisplayExamples from "./components/pages/CssDisplayExample";

function App() {
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Navigation />
            </Grid>
            <Grid item xs={9}>
              <Grid container spacing={2} style={{ marginTop: "6px" }}>
                <Routes>
                  <Route path="/" element={<Navigate to="/home" />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/var-let-const" element={<VarLetConst />} />
                  <Route path="/accessing-object-properties" element={<AccessingObjectProperties />} />
                  <Route path="/if-else-switch" element={<IfElseSwitch />} />
                  <Route path="/variable-types" element={<VariableTypes />} />
                  <Route path="/arrays" element={<Arrays />} />
                  <Route path="/spread-rest-destructuring" element={<SpreadRestDestructuring />} />
                  <Route path="/shallow-deep-copy" element={<ShallowDeepCopy />} />
                  <Route path="/named-and-default-exports" element={<NamedAndDefaultExports />} />
                  <Route path="/type-script-intro" element={<TypeScriptIntro />} />
                  <Route path="/type-inference" element={<TypeInference />} />
                  <Route path="/type-assertions" element={<TypeAssertions />} />
                  <Route path="/union-types" element={<UnionTypes />} />
                  <Route path="/generics" element={<Generics />} />
                  <Route path="/css-selectors" element={<CssSelectors />} />
                  <Route path="/css-selectors-examples" element={<CssSelectorsExamples />} />
                  <Route path="/css-position" element={<CssPosition />} />
                  <Route path="/css-position-examples" element={<CssPositionExamples />} />
                  <Route path="/css-display" element={<CssDisplay />} />
                  <Route path="/css-display-examples" element={<CssDisplayExamples />} />
                </Routes>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
