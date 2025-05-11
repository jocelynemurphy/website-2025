"use client";

import { ReactNode, useState } from "react";

interface CourseSectionProps {
  title: string;
  children: ReactNode;
}

// Course section component
const CourseSection = ({ title, children }: CourseSectionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-2">
      <h4
        className="cursor-pointer hover:text-blue-600 transition-colors flex items-center"
        onClick={handleClick}
      >
        <svg
          className={`mr-2 w-4 h-4 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <span>{title}</span>
      </h4>
      {isOpen && (
        <ul className="list-disc list-inside ml-4 mt-2">{children}</ul>
      )}
    </div>
  );
};

// Main component
export default function CourseCatalog() {
  return (
    <div className="mt-4 flex flex-col lg:flex-row w-full bg-amber-50 p-4 rounded-xl">
      <div className="lg:w-1/2">
        <CourseSection title="Math">
          <p className="font-bold">Calculus and Linear algebra</p>
          <li>Fundamental Engineering Math 1 & 2</li>
          <li>Advanced Engineering Math 1 & 2</li>
          <li>Optimization and Numerical Methods</li>
          <li>Numerical and Applied Calculus</li>
          <li>Matrices and Linear Systems</li>
          <li>Applied Linear Algebra</li>
          <p className="font-bold">Probability, Statistics, and Economics:</p>
          <li>Decision Making (Game Theory)</li>
          <li>Probability and Statistics</li>
          <li>Machine Learning</li>
          <li>Engineering Economics of Design</li>
        </CourseSection>

        <CourseSection title="Electrical and Software Engineering">
          <li>Digital Computation (C++)</li>
          <li>Data Structures and Algorithms</li>
          <li>Digital Systems (Circuits)</li>
          <li>Circuits, Instrumentation, and Measurements</li>
          <li>Linear Systems and Signals</li>
          <li>Control Systems</li>
        </CourseSection>

        <CourseSection title="Physics and Chemistry">
          <li>Statics</li>
          <li>Dynamics</li>
          <li>Electricity, Magnetism, and Optics</li>
          <li>Materials Chemistry</li>
          <li>Mechanics of Deformable Solids</li>
          <li>Fluid Mechanics</li>
          <li>Thermodynamics</li>
        </CourseSection>
      </div>
      <div className="lg:w-1/2">
        <CourseSection title="Systems and Simulation">
          <li>Design, Systems, and Society</li>
          <li>Systems Models</li>
          <li>Introduction to Complex Systems</li>
          <li>Simulating Neurobiological Systems</li>
          <li>Cryptography and System Security</li>
          <li>
            Computational Simulations for Societal and Environmental Systems
          </li>
        </CourseSection>

        <CourseSection title="Design and Prototyping">
          <li>Human Factors in Design</li>
          <li>Engineering Prototyping</li>
          <li>Needs Analysis and Prototyping</li>
          <li>Testing, Verification, and Validation</li>
          <li>Hybrid Vehicles Project</li>
        </CourseSection>

        <CourseSection title="Human Systems">
          <li>The Sociology of Street Gangs</li>
          <li>Research through the Urban Arts</li>
          <li>The Politics of Decolonization</li>
          <li>Biology of Human Aging</li>
        </CourseSection>
      </div>
    </div>
  );
}
