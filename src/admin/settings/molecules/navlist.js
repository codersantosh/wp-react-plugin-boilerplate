/*Inbuilt Components*/
import {
    getNav,
} from "../utils/get-nav";
import Nav from "../atoms/nav";

const Navlist = () => {
    return (
        <nav className="wp-react-plugin-boilerplate-navigation">
            <ul className="at-flex">
                {getNav.map(function (item){
                    return (
                        <Nav
                            to={item.to}
                            title={item.title}
                        />
                    )
                })}

            </ul>
        </nav>
    );
}

export default Navlist;