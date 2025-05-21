import React, { useState } from "react";
import { Search } from "lucide-react";

const ResultReport = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    academy: "Academy trg wg",
    bafa: "80 BAFA",
    semester: "6th Semester",
    course: "BSc (Hons)in Aeronautics",
    duties: "General Duties (Pilot)",
    group: "Group A",
    subject: "Aeroengine",
    examType: "End Exam"
  });

  const results = [
    { ser: 1, bdNo: 14488, rank: "Officer Cadet", name: "Md Zahir Uddin Babor", branch: "General Duties (Pilot)", marks: 87.0, total: 87 },
    { ser: 2, bdNo: 14489, rank: "Officer Cadet", name: "Md Arifur Rahman", branch: "General Duties (Pilot)", marks: 80.0, total: 80 },
    { ser: 3, bdNo: 14490, rank: "Officer Cadet", name: "M.M. Sayket Ahamed Raj", branch: "General Duties (Pilot)", marks: 77.0, total: 77 },
    { ser: 4, bdNo: 14491, rank: "Officer Cadet", name: "Md Taj Uddin Antor", branch: "General Duties (Pilot)", marks: 86.0, total: 86 },
    { ser: 5, bdNo: 14492, rank: "Officer Cadet", name: "Md Sohag Mia", branch: "General Duties (Pilot)", marks: 76.0, total: 76 },
    { ser: 6, bdNo: 14494, rank: "Officer Cadet", name: "S.M. Azmain Fayaz", branch: "General Duties (Pilot)", marks: 83.0, total: 83 },
    { ser: 7, bdNo: 14495, rank: "Officer Cadet", name: "M A Ahad", branch: "General Duties (Pilot)", marks: 68.0, total: 68 },
    { ser: 8, bdNo: 14496, rank: "Officer Cadet", name: "Md Zafir Yasar Rafid", branch: "General Duties (Pilot)", marks: 82.0, total: 82 },
    { ser: 9, bdNo: 14497, rank: "Officer Cadet", name: "Mohammad Aleem Uddin", branch: "General Duties (Pilot)", marks: 81.0, total: 81 },
    { ser: 10, bdNo: 14499, rank: "Officer Cadet", name: "Galib Md Ashab", branch: "General Duties (Pilot)", marks: 90.0, total: 90 },
    { ser: 11, bdNo: 14500, rank: "Officer Cadet", name: "Fahim Faisal Utsho", branch: "General Duties (Pilot)", marks: 72.0, total: 72 },
    { ser: 12, bdNo: 14501, rank: "Officer Cadet", name: "Fardin Ahmed Anim", branch: "General Duties (Pilot)", marks: 79.0, total: 79 }
  ];

  return (
    <>
      <div className="flex items-center justify-between p-4 border-b border-black">
        <h1 className="text-2xl font-semibold text-black">Result Report</h1>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 text-black bg-black/10 rounded-md hover:bg-black/20">
            Dashboard
          </button>
          <button className="px-4 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600">
            Result Report
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 border-b border-black">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <select className="p-2 border border-black rounded-md">
            <option>{selectedFilters.academy}</option>
          </select>
          <select className="p-2 border border-black rounded-md">
            <option>{selectedFilters.bafa}</option>
          </select>
          <select className="p-2 border border-black rounded-md">
            <option>{selectedFilters.semester}</option>
          </select>
          <select className="p-2 border border-black rounded-md">
            <option>{selectedFilters.course}</option>
          </select>
          <select className="p-2 border border-black rounded-md">
            <option>{selectedFilters.duties}</option>
          </select>
          <select className="p-2 border border-black rounded-md">
            <option>{selectedFilters.group}</option>
          </select>
          <select className="p-2 border border-black rounded-md">
            <option>{selectedFilters.subject}</option>
          </select>
          <select className="p-2 border border-black rounded-md">
            <option>{selectedFilters.examType}</option>
          </select>
          <button className="flex items-center justify-center w-10 h-10 bg-teal-500 rounded-md">
            <Search size={18} color="white" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <button className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700">
          Print
        </button>

        <div className="text-center mt-6">
          <h2 className="text-xl font-bold text-black">BANGLADESH AIR FORCE ACADEMY</h2>
          <h3 className="text-lg font-bold text-black mt-1">SEMESTER FINAL EXAM</h3>
          <p className="mt-1 text-black">
            MARK SHEET : 80 BAFA, BSc (Hons)in Aeronautics IN Aeroengine
          </p>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full border border-black">
            <thead>
              <tr className="bg-black/10">
                <th colSpan={3} className="border border-black px-4 py-2 text-left text-black">
                  SUBJECT : Aeroengine
                </th>
                <th colSpan={5} className="border border-black px-4 py-2 text-right text-black">
                  FULL MARKS : 100
                </th>
              </tr>
              <tr className="bg-black/10">
                <th className="border border-black px-4 py-2 text-center text-black">Ser</th>
                <th className="border border-black px-4 py-2 text-center text-black">BD/No</th>
                <th className="border border-black px-4 py-2 text-center text-black">BUP Roll</th>
                <th className="border border-black px-4 py-2 text-center text-black">Rank</th>
                <th className="border border-black px-4 py-2 text-center text-black">Name</th>
                <th className="border border-black px-4 py-2 text-center text-black">Branch</th>
                <th className="border border-black px-4 py-2 text-center text-black">Marks Obtained</th>
                <th className="border border-black px-4 py-2 text-center text-black">Total Marks 100</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result) => (
                <tr key={result.ser}>
                  <td className="border border-black px-4 py-2 text-center text-black">{result.ser}</td>
                  <td className="border border-black px-4 py-2 text-center text-black">{result.bdNo}</td>
                  <td className="border border-black px-4 py-2 text-center text-black"></td>
                  <td className="border border-black px-4 py-2 text-center text-black">{result.rank}</td>
                  <td className="border border-black px-4 py-2 text-black">{result.name}</td>
                  <td className="border border-black px-4 py-2 text-black">{result.branch}</td>
                  <td className="border border-black px-4 py-2 text-center text-black">{result.marks.toFixed(2)}</td>
                  <td className="border border-black px-4 py-2 text-center text-black">{result.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ResultReport;
