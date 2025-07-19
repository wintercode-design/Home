import React from "react";
import { motion } from "framer-motion";

const ResponsiveScreens = () => {
  return (
    <div className="relative w-full max-w-[600px] h-[400px] flex items-center justify-center">
      {/* Desktop Screen */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.42, 0, 0.58, 1] }}
        className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2"
      >
        <div className="relative">
          {/* Screen */}
          <div className="w-[280px] h-[180px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-2xl border-2 border-blue-200 overflow-hidden">
            {/* Browser Header */}
            <div className="h-6 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center px-3 gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 h-2 bg-white rounded mx-2"></div>
            </div>
            {/* Content */}
            <div className="p-3">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="h-4 bg-blue-300 rounded w-16"></div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
              </div>
              {/* Hero Section */}
              <div className="mb-3">
                <div className="h-3 bg-blue-200 rounded w-3/4 mb-2"></div>
                <div className="h-2 bg-gray-200 rounded w-full mb-1"></div>
                <div className="h-2 bg-gray-200 rounded w-5/6 mb-1"></div>
              </div>
              {/* Cards */}
              <div className="space-y-2">
                <div className="h-6 bg-gradient-to-r from-blue-100 to-blue-200 rounded border border-blue-300"></div>
                <div className="h-6 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded border border-indigo-300"></div>
              </div>
            </div>
          </div>
          {/* Stand */}
          <div className="w-4 h-8 bg-gray-300 mx-auto rounded-b-lg"></div>
          <div className="w-16 h-2 bg-gray-300 mx-auto rounded"></div>
        </div>
      </motion.div>

      {/* Tablet Screen */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 5 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.42, 0, 0.58, 1] }}
        className="absolute z-20 left-1/3 top-1/2 transform -translate-y-1/2"
      >
        <div className="w-[200px] h-[140px] bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg shadow-2xl border-2 border-indigo-200 overflow-hidden">
          {/* Status Bar */}
          <div className="h-4 bg-gradient-to-r from-indigo-100 to-indigo-200 flex items-center justify-between px-2 text-xs text-indigo-700">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 bg-indigo-300 rounded"></div>
              <div className="w-1 h-1 bg-indigo-400 rounded-full"></div>
            </div>
          </div>
          {/* Content */}
          <div className="p-2">
            {/* Navigation */}
            <div className="flex items-center justify-between mb-2">
              <div className="h-3 bg-indigo-300 rounded w-12"></div>
              <div className="flex gap-0.5">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
              </div>
            </div>
            {/* Main Content */}
            <div className="mb-2">
              <div className="h-2.5 bg-indigo-200 rounded w-2/3 mb-1"></div>
              <div className="h-1.5 bg-gray-200 rounded w-full mb-0.5"></div>
              <div className="h-1.5 bg-gray-200 rounded w-4/5 mb-0.5"></div>
            </div>
            {/* Feature Cards */}
            <div className="space-y-1">
              <div className="h-4 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded border border-indigo-300"></div>
              <div className="h-4 bg-gradient-to-r from-purple-100 to-purple-200 rounded border border-purple-300"></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Screen */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.42, 0, 0.58, 1] }}
        className="absolute z-30 left-2/3 top-1/2 transform -translate-y-1/2"
      >
        <div className="w-[120px] h-[200px] bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-2xl border-2 border-purple-200 overflow-hidden">
          {/* Status Bar */}
          <div className="h-5 bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-between px-2 text-xs text-purple-700">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-3 h-1.5 bg-purple-300 rounded"></div>
              <div className="w-0.5 h-0.5 bg-purple-400 rounded-full"></div>
            </div>
          </div>
          {/* Content */}
          <div className="p-2">
            {/* App Header */}
            <div className="flex items-center justify-between mb-2">
              <div className="h-2.5 bg-purple-300 rounded w-8"></div>
              <div className="flex gap-0.5">
                <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
              </div>
            </div>
            {/* Main Content */}
            <div className="mb-2">
              <div className="h-2 bg-purple-200 rounded w-3/4 mb-1"></div>
              <div className="h-1 bg-gray-200 rounded w-full mb-0.5"></div>
              <div className="h-1 bg-gray-200 rounded w-5/6 mb-0.5"></div>
            </div>
            {/* Action Buttons */}
            <div className="space-y-1">
              <div className="h-3 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full border border-purple-300"></div>
              <div className="h-3 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full border border-pink-300"></div>
            </div>
            {/* Bottom Navigation */}
            <div className="absolute bottom-3 left-2 right-2">
              <div className="flex justify-around">
                <div className="w-1.5 h-1.5 bg-purple-300 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-purple-300 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-purple-300 rounded-full"></div>
              </div>
            </div>
          </div>
          {/* Home Indicator */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
            <div className="w-8 h-1 bg-purple-300 rounded-full"></div>
          </div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.42, 0, 0.58, 1] }}
        className="absolute top-0 right-0"
      >
        <div className="w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.42, 0, 0.58, 1] }}
        className="absolute bottom-0 left-0"
      >
        <div className="w-3 h-3 bg-indigo-400 rounded-full opacity-60"></div>
      </motion.div>
    </div>
  );
};

export default ResponsiveScreens;
