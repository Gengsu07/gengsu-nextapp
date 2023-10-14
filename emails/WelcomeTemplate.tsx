import React, { CSSProperties } from "react";
import {
  Html,
  Head,
  Body,
  Link,
  Container,
  Preview,
  Hr,
  Tailwind,
} from "@react-email/components";

const WelcomeTemplate = () => {
  return (
    <Html>
      <Head>
        <Preview>Welcome to Gengsu Sites Community</Preview>
      </Head>
      <Tailwind>
        <Body className="bg-white text-center ">
          <Container className="font-mono">
            Hi gengs, welcome to our community. Explore and Learn all tech stuff
            you like
            <Hr />
            <Link href="https://instagram.com/sugengw07">instagram</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
