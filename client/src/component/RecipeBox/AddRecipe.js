import React from "react";
import AddBtn from "./AddBtn";
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";

function AddRecipe() {
    return (
        <Link to="/create/info" style={{textDecoration: "none"}}>
            <div className="col my-2 h-100 pb-3 font-book">
                <motion.div className="card h-100 recipe-card" whileHover={{ scale: 1.01 }}>
                    <div className="card-body d-flex align-items-center justify-content-center">
                        {/* Below link needs to redirect to Chue's page */}
                        <AddBtn/>
                    </div>
                    <div className="card-footer d-flex justify-content-center">
                        <span className="font-book-italic text-truncate">
                            Add a Recipe!
                        </span>
                    </div>
                </motion.div>
            </div>
        </Link>
    );
}

export default AddRecipe;