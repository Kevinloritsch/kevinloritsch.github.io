"use client";
import { useEffect, useState } from "react";

const Footer = () => {
  const [lastCommit, setLastCommit] = useState<string | null>(null);
  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/Kevinloritsch/kevinloritsch.github.io",
        );
        const data = await res.json();
        setLastCommit(data.updated_at);
      } catch (err) {
        console.error("Failed to fetch last commit: ", err);
      }
    };
    fetchCommits();
  }, []);

  return (
    <div className="border-gray mx-auto h-[10vh] w-2/3 border-t-2 py-8 text-center">
      <div className="pt-2 text-center">© Kevin Loritsch</div>
      <div>Last updated at: {lastCommit}</div>
    </div>
  );
};
export default Footer;
