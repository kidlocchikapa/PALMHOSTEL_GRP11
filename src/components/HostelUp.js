import React, { useState } from "react";
import axios from "axios";

function HostelUp() {
  const [file, setFile] = useState(null);
  const [hostel, setHostel] = useState("");
  const [location, setLocation] = useState("");
  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);
  const [isFileInputDisabled, setIsFileInputDisabled] = useState(false); // New state for disabling file input

  function handleUpload() {
    if (!file) {
      setMsg("No file selected");
      return;
    }

    const fd = new FormData();
    fd.append("file", file);
    fd.append("hostel", hostel);
    fd.append("location", location);
    fd.append("cost", cost);
    fd.append("description", description);

    setMsg("Uploading...");
    setProgress((prevState) => ({ ...prevState, started: true }));

    axios
      .post("http://httpbin.org/post", fd, {
        onUploadProgress: (progressEvent) => {
          setProgress((prevState) => ({
            ...prevState,
            pc: (progressEvent.loaded / progressEvent.total) * 100,
          }));
        },
        headers: {
          "Custom-Header": "value",
        },
      })
      .then((res) => {
        setMsg("Upload successful");
        setImageUrl(URL.createObjectURL(file));
        setIsFileInputDisabled(true); // Disable file input on successful upload
        console.log(res.data);
      })
      .catch((err) => {
        setMsg("Upload failed");
        console.error(err);
      });
  }

  return (
    <div className="App p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6 mt-20">
      <h1 className="text-2xl font-bold mb-4">Hostel Upload</h1>

      <input
        type="file"
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
        disabled={isFileInputDisabled} 
      />

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Hostel:
        </label>
        <input
          type="text"
          value={hostel}
          onChange={(e) => setHostel(e.target.value)}
          placeholder="Enter hostel name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Location:
        </label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Cost:
        </label>
        <input
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          placeholder="Enter cost"
          min="0"
          step="0.01"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description:
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>

      <button
        onClick={handleUpload}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Upload
      </button>

      {progress.started && (
        <progress
          className="w-full mt-2"
          max="100"
          value={progress.pc}
        ></progress>
      )}
      {msg && <span className="block mt-2 text-blue-500">{msg}</span>}

      {imageUrl && (
        <div className="relative mt-4">
          <img
            src={imageUrl}
            alt="Uploaded hostel"
            className="rounded-lg shadow-lg w-full"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full rounded-b-lg">
            <p>
              <strong>Hostel:</strong> {hostel}
            </p>
            <p>
              <strong>Location:</strong> {location}
            </p>
            <p>
              <strong>Cost:</strong> {cost}
            </p>
            <p>
              <strong>Description:</strong> {description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default HostelUp;
