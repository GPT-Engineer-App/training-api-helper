import React, { useState } from "react";
import { FaUser, FaLock, FaChartLine, FaBook, FaDumbbell, FaKey, FaUserPlus, FaServer, FaCloudUploadAlt, FaDocker, FaBookOpen } from "react-icons/fa";

const Index = () => {
  const [activeTab, setActiveTab] = useState("purpose");

  const renderContent = () => {
    switch (activeTab) {
      case "purpose":
        return (
          <div>
            <h2 className="text-xl font-bold my-4">Purpose and Capabilities</h2>
            <p>The API provides back-end functionality for a training app, handling data processing, user management, tracking training progress, and content delivery. It can integrate PEFT training protocols.</p>
          </div>
        );
      case "endpoints":
        return (
          <div>
            <h2 className="text-xl font-bold my-4">API Endpoints</h2>
            <p>Here are the defined API endpoints with their respective methods, parameters, responses, authorization requirements, and rate limits.</p>
            {/* List of endpoints would go here */}
          </div>
        );
      case "security":
        return (
          <div>
            <h2 className="text-xl font-bold my-4">Security Measures</h2>
            <p>Security is enforced through encryption, authentication, data validation, and error handling.</p>
          </div>
        );
      case "integration":
        return (
          <div>
            <h2 className="text-xl font-bold my-4">Integration with Front-end and External Services</h2>
            <p>Details on how the client interacts with the API and any third-party services.</p>
          </div>
        );
      case "choice":
        return (
          <div>
            <h2 className="text-xl font-bold my-4">Choosing Between Commercial and Open Source</h2>
            <p>Pros and cons of using commercial services like OpenAI and open-source solutions.</p>
          </div>
        );
      case "infrastructure":
        return (
          <div>
            <h2 className="text-xl font-bold my-4">Infrastructure and Scalability</h2>
            <p>Information on API hosting, containerization, and orchestration for scalability.</p>
          </div>
        );
      case "documentation":
        return (
          <div>
            <h2 className="text-xl font-bold my-4">Development and Documentation</h2>
            <p>Use of API design tooling, documentation standards, and accessibility.</p>
          </div>
        );
      default:
        return <div>Select a tab to see the content</div>;
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold underline mb-4">Training App API Documentation</h1>
      <div className="flex gap-4 mb-4">
        <button className={`px-4 py-2 rounded ${activeTab === "purpose" ? "bg-blue-500 text-white" : "bg-gray-200"}`} onClick={() => setActiveTab("purpose")}>
          <FaBookOpen /> Purpose
        </button>
        <button className={`px-4 py-2 rounded ${activeTab === "endpoints" ? "bg-blue-500 text-white" : "bg-gray-200"}`} onClick={() => setActiveTab("endpoints")}>
          <FaServer /> Endpoints
        </button>
        <button className={`px-4 py-2 rounded ${activeTab === "security" ? "bg-blue-500 text-white" : "bg-gray-200"}`} onClick={() => setActiveTab("security")}>
          <FaLock /> Security
        </button>
        <button className={`px-4 py-2 rounded ${activeTab === "integration" ? "bg-blue-500 text-white" : "bg-gray-200"}`} onClick={() => setActiveTab("integration")}>
          <FaCloudUploadAlt /> Integration
        </button>
        <button className={`px-4 py-2 rounded ${activeTab === "choice" ? "bg-blue-500 text-white" : "bg-gray-200"}`} onClick={() => setActiveTab("choice")}>
          <FaBook /> Choice
        </button>
        <button className={`px-4 py-2 rounded ${activeTab === "infrastructure" ? "bg-blue-500 text-white" : "bg-gray-200"}`} onClick={() => setActiveTab("infrastructure")}>
          <FaDocker /> Infrastructure
        </button>
        <button className={`px-4 py-2 rounded ${activeTab === "documentation" ? "bg-blue-500 text-white" : "bg-gray-200"}`} onClick={() => setActiveTab("documentation")}>
          <FaChartLine /> Documentation
        </button>
      </div>
      <div className="border p-4 rounded">{renderContent()}</div>
    </div>
  );
};

export default Index;
