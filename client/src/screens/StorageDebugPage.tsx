import React from 'react';

const StorageDebugPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Storage Debug</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">Storage debug information will be displayed here.</p>
        </div>
      </div>
    </div>
  );
};

export default StorageDebugPage;