"use client";

import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useState } from "react";

export default function TestFirebase() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const addStudent = async () => {
    setLoading(true);
    setStatus(null);
    try {
      const docRef = await addDoc(collection(db, "students"), {
        name: "Subramani",
        age: 21,
        sport: "Cricket",
        plan: "Premium",
        status: "Active",
        createdAt: new Date().toISOString(),
      });
      console.log("Document written with ID:", docRef.id);
      setStatus("✅ Student Added Successfully! Doc ID: " + docRef.id);
    } catch (error) {
      console.error("Error adding document:", error);
      setStatus("❌ Error: " + (error instanceof Error ? error.message : String(error)));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-black/80 border border-[#D6A23A]/40 rounded-2xl p-6 backdrop-blur-md shadow-2xl max-w-sm">
      <h3 className="text-[#D6A23A] font-bold text-lg mb-3">🔥 Firebase Test</h3>
      <p className="text-white/70 text-sm mb-4">
        Click below to add a test student to Firestore.
      </p>
      <button
        onClick={addStudent}
        disabled={loading}
        className="w-full bg-[#0C6B3F] hover:bg-[#0C6B3F]/80 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 disabled:scale-100"
      >
        {loading ? "Adding..." : "Add Student to Firestore"}
      </button>
      {status && (
        <p className={`mt-3 text-sm font-medium ${status.startsWith("✅") ? "text-green-400" : "text-red-400"}`}>
          {status}
        </p>
      )}
    </div>
  );
}
