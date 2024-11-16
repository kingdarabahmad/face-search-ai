import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { CameraIcon, PhotoIcon, ArrowUpTrayIcon, XCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const FaceSearchMain = () => {
  const [activeTab, setActiveTab] = useState('upload');
  const [selectedImage, setSelectedImage] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const webcamRef = useRef(null);
  const fileInputRef = useRef(null);
  const remainingSearches = 3;

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const handleSearch = () => {
    //  face search logic here
    console.log('Searching...');
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
          <h1 className="text-2xl  text-slate-900 font-bold tracking-wider mb-2">Face Search</h1>
          <p className="text-slate-600 text-sm tracking-wider">
            Remaining searches: <span className="font-semibold text-orange-600 ">{remainingSearches}</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${activeTab === 'upload'
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
          >
            <PhotoIcon className="w-5 h-5" />
            Upload Image
          </button>
          <button
            onClick={() => setActiveTab('webcam')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${activeTab === 'webcam'
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
          >
            <CameraIcon className="w-5 h-5" />
            Use Webcam
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 mb-6">
          {activeTab === 'upload' ? (
            <div className="text-center">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/*"
                className="hidden"
              />
              {selectedImage ? (
                <div className="space-y-4">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="max-w-md mx-auto rounded-lg"
                  />
                  <div className="flex flex-col items-center gap-4">
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="flex items-center gap-2 text-red-600 hover:text-red-700"
                    >
                      <XCircleIcon className="w-5 h-5" />
                      Remove Image
                    </button>
                    <button
                      onClick={handleSearch}
                      className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-slate-700 font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      <MagnifyingGlassIcon className="w-6 h-6" />
                      Search Face
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => fileInputRef.current.click()}
                  className="border-2 border-dashed border-slate-300 rounded-lg p-12 cursor-pointer hover:border-slate-900 transition-colors"
                >
                  <ArrowUpTrayIcon className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600">Click to upload an image or drag and drop</p>
                  <p className="text-sm text-slate-500 mt-2">PNG, JPG up to 10MB</p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center">
              {capturedImage ? (
                <div className="space-y-4">
                  <img
                    src={capturedImage}
                    alt="Captured"
                    className="max-w-md mx-auto rounded-lg"
                  />
                  <div className="flex flex-col items-center gap-4">
                    <button
                      onClick={() => setCapturedImage(null)}
                      className="flex items-center gap-2 text-red-600 hover:text-red-700"
                    >
                      <XCircleIcon className="w-5 h-5" />
                      Retake Photo
                    </button>
                    <button
                      onClick={handleSearch}
                      className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-slate-700 font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      <MagnifyingGlassIcon className="w-6 h-6" />
                      Search Face
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <Webcam
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    className="max-w-md mx-auto rounded-lg"
                  />
                  <button
                    onClick={captureImage}
                    className="flex items-center gap-2 bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 mx-auto"
                  >
                    <CameraIcon className="w-5 h-5" />
                    Capture Image
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Subscription Banner */}
        <div className="bg-gradient-to-r from-orange-400 to-orange-200 rounded-lg p-6 text-white">
          <h2 className="text-xl font-bold mb-2">Unlock Unlimited Searches!</h2>
          <p className="mb-4">
            Upgrade to our premium plan for unlimited face searches and advanced features.
          </p>
          <button className="bg-white text-slate-900 px-6 py-2 rounded-lg font-semibold hover:bg-slate-100">
            View Plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaceSearchMain;