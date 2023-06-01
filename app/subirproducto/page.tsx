"use client";

import { Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import { NextPage } from "next";
import { useState } from "react";

interface Props {
  dirs: string[];
}

const Home: NextPage<Props> = () => {
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();

  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("myImage", selectedFile);
      const { data } = await axios.post("/api/image", formData);
      console.log(data);
    } catch (error: any) {
      console.log(error.response?.data);
    }
    setUploading(false);
  };

  return (
    <Flex m={50} flexDirection={"column"}>
      <div className="max-w4xl mx-auto p-20 space-y-6">
        <label>
          <input
            type="file"
            hidden
            onChange={({ target }) => {
              if (target.files) {
                const file = target.files[0];
                setSelectedImage(URL.createObjectURL(file));
                setSelectedFile(file);
              }
            }}
          />
          <div className="w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer">
            {selectedImage ? (
              <img src={selectedImage} alt="" />
            ) : (
              <span>Select Image</span>
            )}
          </div>
        </label>

        <Button
          onClick={handleUpload}
          disabled={uploading}
          style={{ opacity: uploading ? ".5" : "1" }}
        >
          {uploading ? "Uploading.." : "Upload"}
        </Button>
      </div>
    </Flex>
  );
};

export default Home;
