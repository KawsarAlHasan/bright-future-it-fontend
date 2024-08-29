import React, { useState } from "react";
import { useMilestone } from "../api/allApi";
import Loader from "./Loading";

function CourseModules() {
  const { milestones, loading, error } = useMilestone();
  const [activeMilestone, setActiveMilestone] = useState({});
  const [activeModule, setActiveModule] = useState({});

  const toggleMilestone = (milestoneIndex) => {
    setActiveMilestone((prev) => ({
      ...prev,
      [milestoneIndex]: !prev[milestoneIndex],
    }));
  };

  const toggleModule = (milestoneIndex, moduleIndex) => {
    setActiveModule((prev) => ({
      ...prev,
      [milestoneIndex]: {
        ...prev[milestoneIndex],
        [moduleIndex]: !prev[milestoneIndex]?.[moduleIndex],
      },
    }));
  };

  return (
    <div className="mb-16">
      <div className="mt-10">
        <h2
          data-aos="fade-up"
          data-aos-delay="0"
          className="text-center text-[28px] md:text-[40px] font-semibold "
        >
          Course{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#884AFF] to-[#C54AFF]">
            Module
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center text-[16px] md:text-[20px] font-normal mx-4"
        >
          Various versions have evolved over the years, sometimes by accident,
        </p>
      </div>

      <div className="mx-5 md:mx-16 lg:mx-36 mt-10 flex flex-col gap-[5px]">
        {error ? (
          <div>{error}</div>
        ) : loading ? (
          <Loader />
        ) : (
          milestones.data.map((milestone, milestoneIndex) => (
            <div
              key={milestone.MilestoneID}
              className="collapse collapse-arrow rounded-lg mb-2"
              style={{ backgroundColor: "#A369FF" }}
            >
              <input
                type="checkbox"
                checked={activeMilestone[milestoneIndex] || false}
                onChange={() => toggleMilestone(milestoneIndex)}
              />
              <div className="collapse-title text-[15px] md:text-xl font-medium bg-gradient-to-b from-[#884AFF] to-[#C54AFF] text-white">
                {milestone.MilestoneName}
              </div>
              {activeMilestone[milestoneIndex] && (
                <div className="collapse-content bg-purple-100 rounded-b-lg">
                  {milestone.modules.map((module, moduleIndex) => (
                    <div
                      key={module.ModuleID}
                      className={`${
                        module.topics.length > 0
                          ? "collapse collapse-arrow rounded-lg mt-4 mb-2"
                          : "collapse rounded-lg mt-4 mb-2"
                      }`}
                      style={{ backgroundColor: "#D3B3FF" }}
                    >
                      {module.topics.length > 0 ? (
                        <input
                          type="checkbox"
                          checked={
                            activeModule[milestoneIndex]?.[moduleIndex] || false
                          }
                          onChange={() =>
                            toggleModule(milestoneIndex, moduleIndex)
                          }
                        />
                      ) : (
                        ""
                      )}
                      <div className="collapse-title text-[15px] md:text-lg font-medium text-black">
                        {module.ModuleName}
                      </div>
                      <div className="collapse-content bg-white rounded-b-lg">
                        {module.topics.map((topic, topicIndex) => (
                          <div
                            key={topicIndex}
                            className="flex items-center py-2 px-4 mb-2 bg-white my-1 rounded-lg"
                            style={{ backgroundColor: "#F3E8FF" }}
                          >
                            <span
                              className="bg-[#884AFF] w-3 h-3 rounded-full mr-2"
                              style={{ backgroundColor: "#884AFF" }}
                            ></span>
                            <p>{topic.TopicName}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CourseModules;
