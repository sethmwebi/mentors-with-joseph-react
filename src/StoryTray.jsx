import { useEffect } from "react";

export default function StoryTray({ stories, setStories }) {
  useEffect(() => {
    setStories([...stories, { id: "create", label: "Create Story" }]);
  }, []);

  return (
    <ul>
      {stories.map((story, idx) => (
        <li key={story.id + idx}>{story.label}</li>
      ))}
    </ul>
  );
}
