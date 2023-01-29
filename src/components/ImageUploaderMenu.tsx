import React from "react";
import {InboxOutlined, UploadOutlined} from "@ant-design/icons";
import type {UploadProps} from "antd";
import {message, Upload} from "antd";

const {Dragger} = Upload;

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const {status} = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      void message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      void message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

export function ImageUploaderMenu() {
  return (
    <div className="image-uploader">
      <h2 className='ingredients-page__title'>Upload Image</h2>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
      </Dragger>
      <button className='upload-button'>
        Upload <UploadOutlined />
      </button>
    </div>
  );
}
