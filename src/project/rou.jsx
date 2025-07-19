import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Project from './proroute';
import HtmlCss from './HtmlCss';
import Boots5 from './bootstrapProject';


function Navv() { 
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Project />}>
                    <Route index element={<HtmlCss />} />
                    <Route path="/boot" element={<Boots5 />} />
                    {/* <Route path="dashboard" element={<Dashboard />} />
                    <Route path="*" element={<Nopage />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Navv;