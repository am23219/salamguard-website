"use client";

import { useState } from "react";
import Header from "../../public/components/Header";
import { DuaCard, CategoryButton, AmalCard } from "../../public/components/RemedyComponents";
import { duaCategories, aamaalList } from "../../data/remediesData"; // Move data to separate file

export default function SpiritualRemediesPage() {
  const [view, setView] = useState("Duas");
  const [selectedCategory, setSelectedCategory] = useState("Duas for Forgiveness");

  return (
    <div className="min-h-screen bg-[#1C1F26]">
      <Header type="spiritual-remedies" title="Spiritual Remedies" />
      
      <main className="container mx-auto px-4 py-12 pt-24 pb-20">
        {/* View Toggle */}
        <div className="flex justify-center gap-4 mb-12">
          {["Duas", "Aamaal"].map((type) => (
            <button
              key={type}
              onClick={() => setView(type)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                view === type
                  ? "bg-[#61EBCE] text-gray-900"
                  : "bg-gray-800 text-gray-200 hover:bg-gray-700"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {view === "Duas" ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Categories */}
              <div className="space-y-2">
                {duaCategories.map((category) => (
                  <CategoryButton
                    key={category.name}
                    name={category.name}
                    isSelected={selectedCategory === category.name}
                    onClick={() => setSelectedCategory(category.name)}
                  />
                ))}
              </div>

              {/* Duas Display */}
              <div className="md:col-span-3 space-y-6">
                {selectedCategory && 
                  duaCategories
                    .find(cat => cat.name === selectedCategory)
                    ?.items.map((dua, index) => (
                      <DuaCard key={index} {...dua} />
                    ))
                }
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aamaalList.map((amal, index) => (
                <AmalCard key={index} {...amal} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
