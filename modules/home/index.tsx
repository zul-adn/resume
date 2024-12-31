import { Suspense } from "react";
import WorkExperience from "./components/work-experience";
import PersonalInformation from "./components/personal-information";
import FloatingButton from "./components/floating-button";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-2 h-screen overflow-hidden">
      <div className="relative container bg-slate-200 p-6 grid-cols-4" >
        <Suspense fallback={<p>Loading feed...</p>}>
                <PersonalInformation />
            </Suspense>
      </div>
      <div className="relative container p-6 grid-cols-8 overflow-x-scroll">
            <Suspense fallback={<p>Loading feed...</p>}>
                <WorkExperience />
            </Suspense>
      </div>
      <FloatingButton />
    </div>
  );
}
