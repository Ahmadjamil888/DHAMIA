"use client";
import { useEffect, useState } from "react";
import { Column } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, work } from "@/app/resources/content";
import { Schema } from "@/once-ui/modules";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
};

export default function Work() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Ahmadjamil888/repos?per_page=100")
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      });
  }, []);

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`${baseURL}/og?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <h2 className="text-2xl font-bold mb-4">All My GitHub Repositories</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {repos.map(repo => (
            <div
              key={repo.id}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                padding: "16px",
                minWidth: "250px",
                maxWidth: "350px",
                background: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                flex: "1 1 250px"
              }}
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563eb", fontWeight: 600, fontSize: "1.1rem", textDecoration: "none" }}
              >
                {repo.name}
              </a>
              <div style={{ color: "#6b7280", fontSize: "0.95rem", marginTop: "8px" }}>
                {repo.description || "No description"}
              </div>
            </div>
          ))}
        </div>
      )}
    </Column>
  );
}