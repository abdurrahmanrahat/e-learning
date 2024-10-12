import { Editor } from "@tinymce/tinymce-react";

export default function RichTextEditor({ initialValue, handleEditorChange, hight }) {
  return (
    <Editor
      apiKey={process.env.RICHTEXTEDITOR_API} // Replace with your TinyMCE API key
      initialValue={`<p>${initialValue ? initialValue : ""}</p>`}
      init={{
        height: hight,
        menubar: false,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar:
          "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help",
            placeholder: "Your Bio Description here..."
      }}
      onEditorChange={handleEditorChange}
    />
  );
}
