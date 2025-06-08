"use client";
import React from "react";
import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Card } from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { baseURL } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Schema } from "@/once-ui/modules";

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title="Ahmad"
        description={home.description}
        image={`${baseURL}/og?title=${encodeURIComponent(home.title)}`}
        author={{
          name: "Ahmad",
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Hero Section */}
      <Column fillWidth paddingY="32" gap="m">
        <Column maxWidth="s" gap="m">
          <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
            <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}>
              <Row paddingY="2">Welcome to My Portfolio</Row>
            </Badge>
          </RevealFx>
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline || "Building Digital Experiences That Matter"}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              Hi, I’m Ahmad, a passionate web developer and designer. I love crafting beautiful, performant, and accessible digital products.
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              arrowIcon
            >
              <Flex gap="8" vertical="center">
                {about.avatar?.display && (
                  <Avatar
                    style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                Learn more about me
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>

      {/* Skills Section */}
      <RevealFx delay={0.2} fillWidth horizontal="center" paddingTop="32" paddingBottom="32">
        <Column maxWidth="s" gap="m">
          <Heading variant="display-strong-s">Skills & Technologies</Heading>
          <Flex gap="12" wrap vertical="center">
            <Badge background="brand-alpha-weak" textVariant="label-default-s">React</Badge>
            <Badge background="brand-alpha-weak" textVariant="label-default-s">Next.js</Badge>
            <Badge background="brand-alpha-weak" textVariant="label-default-s">TypeScript</Badge>
            <Badge background="brand-alpha-weak" textVariant="label-default-s">Node.js</Badge>
            <Badge background="brand-alpha-weak" textVariant="label-default-s">Tailwind CSS</Badge>
            <Badge background="brand-alpha-weak" textVariant="label-default-s">UI/UX</Badge>
            <Badge background="brand-alpha-weak" textVariant="label-default-s">API Integration</Badge>
            <Badge background="brand-alpha-weak" textVariant="label-default-s">Performance</Badge>
          </Flex>
        </Column>
      </RevealFx>

      {/* Services Section */}
      <RevealFx delay={0.3} fillWidth horizontal="center" paddingTop="32" paddingBottom="32">
        <Column maxWidth="s" gap="m">
          <Heading variant="display-strong-s">What I Offer</Heading>
          <Flex gap="16" wrap>
            <Card>
              <Heading variant="heading-default-m">Web Development</Heading>
              <Text onBackground="neutral-weak">Modern, fast, and scalable web applications using the latest technologies.</Text>
            </Card>
            <Card>
              <Heading variant="heading-default-m">UI/UX Design</Heading>
              <Text onBackground="neutral-weak">Beautiful, user-friendly interfaces that delight users and drive results.</Text>
            </Card>
            <Card>
              <Heading variant="heading-default-m">Consulting</Heading>
              <Text onBackground="neutral-weak">Advice and guidance for your web projects, from idea to launch and beyond.</Text>
            </Card>
          </Flex>
        </Column>
      </RevealFx>

      {/* Timeline Section */}
      <RevealFx delay={0.4} fillWidth horizontal="center" paddingTop="32" paddingBottom="32">
        <Column maxWidth="s" gap="m">
          <Heading variant="display-strong-s">My Journey</Heading>
          <Flex direction="column" gap="12">
            <Card>
              <Heading variant="heading-default-s">2021 - Present</Heading>
              <Text onBackground="neutral-weak">Lead Developer at AwesomeTech, building scalable SaaS products.</Text>
            </Card>
            <Card>
              <Heading variant="heading-default-s">2019 - 2021</Heading>
              <Text onBackground="neutral-weak">Frontend Engineer at Webify, focused on UI/UX and performance.</Text>
            </Card>
            <Card>
              <Heading variant="heading-default-s">2017 - 2019</Heading>
              <Text onBackground="neutral-weak">Freelance Web Designer & Developer, working with startups and agencies.</Text>
            </Card>
          </Flex>
        </Column>
      </RevealFx>

      {/* Testimonials Section */}
      <RevealFx delay={0.5} fillWidth horizontal="center" paddingTop="32" paddingBottom="32">
        <Column maxWidth="s" gap="m">
          <Heading variant="display-strong-s">Testimonials</Heading>
          <Flex gap="16" wrap>
            <Card>
              <Text onBackground="neutral-weak">
                "Ahmad is a true professional. He delivered our project on time and exceeded our expectations!"
              </Text>
              <Text variant="label-default-s" style={{ marginTop: 8 }}>— Sarah, Product Manager</Text>
            </Card>
            <Card>
              <Text onBackground="neutral-weak">
                "His attention to detail and design sense is outstanding. Highly recommended."
              </Text>
              <Text variant="label-default-s" style={{ marginTop: 8 }}>— John, Startup Founder</Text>
            </Card>
          </Flex>
        </Column>
      </RevealFx>

      {/* Newsletter Section */}
      {newsletter.display && (
        <RevealFx delay={0.6} fillWidth horizontal="center" paddingTop="32" paddingBottom="32">
          <Column maxWidth="s" gap="m">
            <Heading variant="display-strong-s">Stay in Touch</Heading>
            <Text onBackground="neutral-weak">
              Subscribe to my newsletter for web development tips, project updates, and more.
            </Text>
            <Mailchimp newsletter={newsletter} />
          </Column>
        </RevealFx>
      )}
    </Column>
  );
}