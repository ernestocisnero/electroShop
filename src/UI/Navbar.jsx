import { NavLink } from "react-router-dom";



export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
                <NavLink className="navbar-brand" to="/">Electro-Shop</NavLink>

                <div className="container w-50">
                    <input className="form-control me-sm-2" type="text" placeholder="Looking for something?" />
                    <button className="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
                </div>
                <NavLink className="navbar-brand mx-2" to="/auth">
                        Login
                    </NavLink>

            </nav>
        </>
    )
}
