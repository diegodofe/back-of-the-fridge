import {InboxOutlined} from "@ant-design/icons";
import type {UploadFile, UploadProps} from "antd";
import {message, Upload} from "antd";
import {useState} from "react";

const {Dragger} = Upload;

export function ImageUploaderMenu({
  onImageSubmit,
}: {
  onImageSubmit: (ing: string) => void;
}) {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const noFiles = fileList.length === 0;

  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "",
    onChange(info) {
      const {status} = info.file;
      if (status !== "uploading") {
        setFileList(info.fileList);
      }
      if (status === "done") {
        // void message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        void message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files[0]?.name);
      // Call the function here
      onImageSubmit(e.dataTransfer.files[0]?.name || '');
    },
  };

  return (
    <div className="image-uploader">
      <h2 className="ingredients-page__title">Upload an image</h2>

      <div className={noFiles ? "" : "mb-6"}>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined style={{color: "green"}} />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Dragger>
      </div>
      {/* <button
        disabled={noFiles}
        onClick={handleUploadImage}
        className={noFiles ? "button-disabled" : "button-enabled"}
      >
        Upload <div style={{width: "5px"}}></div>
        <UploadOutlined />
      </button> */}
    </div>
  );
}
