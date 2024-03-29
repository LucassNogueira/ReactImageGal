import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            onClick={() => setSelectedImg(doc.url)}
            whileHover={{ opacity: 1 }}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              src={doc.url}
              alt="uploadedpic"
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
