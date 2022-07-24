/*Inbuilt Components*/
import {
    getNav,
} from "../utils/get-nav";
import Nav from "../atoms/nav";

const Navlist = () => {
    return (
        <nav>
            <ul>
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