import React from "react";
import { Section } from "./styles";
import ContentLoader from "react-content-loader";

export default function Loading() {
  return (
    <Section>
      <div>
        <ContentLoader
          speed={2}
          width={400}
          height={460}
          viewBox="0 0 400 460"
          backgroundColor="#656161"
          foregroundColor="#934848"
        >
          <rect x="28" y="261" rx="2" ry="2" width="341" height="13" />
          <rect x="29" y="282" rx="2" ry="2" width="168" height="13" />
          <rect x="14" y="12" rx="2" ry="2" width="377" height="229" />
          <rect x="86" y="40" rx="0" ry="0" width="2" height="0" />
          <rect x="30" y="320" rx="0" ry="0" width="336" height="7" />
          <rect x="30" y="336" rx="0" ry="0" width="336" height="7" />
          <rect x="30" y="352" rx="0" ry="0" width="209" height="6" />
          <rect x="30" y="391" rx="0" ry="0" width="132" height="6" />
        </ContentLoader>
      </div>
      <div>
        <ContentLoader
          speed={2}
          width={400}
          height={460}
          viewBox="0 0 400 460"
          backgroundColor="#656161"
          foregroundColor="#934848"
        >
          <rect x="28" y="261" rx="2" ry="2" width="341" height="13" />
          <rect x="29" y="282" rx="2" ry="2" width="168" height="13" />
          <rect x="14" y="12" rx="2" ry="2" width="377" height="229" />
          <rect x="86" y="40" rx="0" ry="0" width="2" height="0" />
          <rect x="30" y="320" rx="0" ry="0" width="336" height="7" />
          <rect x="30" y="336" rx="0" ry="0" width="336" height="7" />
          <rect x="30" y="352" rx="0" ry="0" width="209" height="6" />
          <rect x="30" y="391" rx="0" ry="0" width="132" height="6" />
        </ContentLoader>
      </div>
      <div>
        <ContentLoader
          speed={2}
          width={400}
          height={460}
          viewBox="0 0 400 460"
          backgroundColor="#656161"
          foregroundColor="#934848"
        >
          <rect x="28" y="261" rx="2" ry="2" width="341" height="13" />
          <rect x="29" y="282" rx="2" ry="2" width="168" height="13" />
          <rect x="14" y="12" rx="2" ry="2" width="377" height="229" />
          <rect x="86" y="40" rx="0" ry="0" width="2" height="0" />
          <rect x="30" y="320" rx="0" ry="0" width="336" height="7" />
          <rect x="30" y="336" rx="0" ry="0" width="336" height="7" />
          <rect x="30" y="352" rx="0" ry="0" width="209" height="6" />
          <rect x="30" y="391" rx="0" ry="0" width="132" height="6" />
        </ContentLoader>
      </div>
    </Section>
  );
}
