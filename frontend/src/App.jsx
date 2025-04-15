import 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateCustomer from "./pages/CreateCustomer.jsx";
import NotFound from "./pages/NotFound.jsx";
import CustomersList from "./pages/CustomersList.jsx";
import EditCustomer from "./pages/EditCustomer.jsx";
import ViewCustomer from "./pages/ViewCustomer.jsx";



function App() {
    return (
        <BrowserRouter>


            <div >
                <Routes>

                    <Route path='/' element={<CustomersList />} />
                    <Route path='/add' element={<CreateCustomer />} />
                    <Route path='/edit/:id' element={<EditCustomer />} />
                    <Route path='/view/:id' element={<ViewCustomer />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;