import { useState, useEffect } from "react";
import API from "./axios";

export const useUserProfile = () => {
  const getUserProfile = async () => {
    try {
      const response = await API.get("/user/me");
      return response.data;
    } catch (error) {
      console.error("Error fetching user profile:", error);
      throw error;
    }
  };
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = await getUserProfile();
        setUser(userProfile);
      } catch (error) {
        setError("Failed to fetch user profile.");
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, []);
  return { user, loading, error };
};

// sign out
export const signOutUser = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

// Custom hook for fetching milestones
export const useMilestone = () => {
  const getMilestone = async () => {
    try {
      const response = await API.get("/milestone/all");
      return response.data;
    } catch (error) {
      console.error("Error fetching milestones:", error);
      throw error;
    }
  };

  const [milestones, setMilestones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMilestones = async () => {
      try {
        const milestoneData = await getMilestone();
        setMilestones(milestoneData);
      } catch (error) {
        setError("Failed to fetch milestones.");
      } finally {
        setLoading(false);
      }
    };

    fetchMilestones();
  }, []);

  return { milestones, loading, error };
};

export const useSingleCourses = () => {
  const getSingleCourses = async () => {
    try {
      const response = await API.get("/courses/1");
      return response.data;
    } catch (error) {
      console.error("Error fetching courses:", error);
      throw error;
    }
  };

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesData = await getSingleCourses();
        setCourses(coursesData);
      } catch (error) {
        setError("Failed to fetch courses.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return { courses, loading, error };
};
