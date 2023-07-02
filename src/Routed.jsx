import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Campus_rep_apply from './components/Campus_rep_apply';
import CodeOfConduct from './components/CodeOfConduct';
import Soon from './components/Soon';
import Team from './components/Team';
import App from './App';
import Apply from './components/Apply';

const Routed = ()=>{
    return(
        <>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/soon" element={<Soon />} />
                <Route path="/campus_rep_apply" element={<Soon />} />
                <Route path="/codeOfConduct" element={<CodeOfConduct />} />
                <Route path="/team" element={<Team />} />
                <Route path="/apply" element={<Soon />} />

            </Routes>
        </Router>

        </>
    );
}
export default Routed;