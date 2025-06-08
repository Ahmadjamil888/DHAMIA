"use client";
import { useEffect, useState } from "react";
import { Column, Heading, Flex, Badge } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, work } from "@/app/resources/content";
import { Schema } from "@/once-ui/modules";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language?: string;
  stargazers_count?: number;
  forks_count?: number;
};

export default function Work() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Ahmadjamil888/repos?per_page=100")
      .then(res => res.json())
      .then(data => {
        // Sort by stars descending
        setRepos(
          data.sort((a: Repo, b: Repo) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
        );
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
      <Heading variant="display-strong-s" style={{ marginBottom: 24 }}>
        🚀 All My GitHub Repositories
      </Heading>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          {repos.map(repo => (
            <div
              key={repo.id}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "20px",
                minWidth: "260px",
                maxWidth: "340px",
                background: "#f9fafb",
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                flex: "1 1 260px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#2563eb",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  textDecoration: "none",
                  marginBottom: 8,
                  letterSpacing: 0.2,
                }}
              >
                {repo.name}
              </a>
              <div style={{ color: "#374151", fontSize: "1rem", marginBottom: 12, minHeight: 40 }}>
                {repo.description || <span style={{ color: "#9ca3af" }}>No description</span>}
              </div>
              <Flex gap="8" vertical="center" style={{ marginTop: "auto" }}>
                {repo.language && (
                  <Badge background="brand-alpha-weak" textVariant="label-default-s">
                    {repo.language}
                  </Badge>
                )}
                <Badge background="neutral-alpha-weak" textVariant="label-default-s">
                  ⭐ {repo.stargazers_count || 0}
                </Badge>
                <Badge background="neutral-alpha-weak" textVariant="label-default-s">
                  🍴 {repo.forks_count || 0}
                </Badge>
              </Flex>
            </div>
          ))}
        </div>
      )}
    </Column>
  );
}