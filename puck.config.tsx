import type { Config } from "@measured/puck";
import { Hero } from "./app/components/blocks/Blank";
import { ButtonGroup } from "./app/components/blocks/ButtonGroup";
import { TextLabel } from "./app/components/blocks/Text";
import { Card } from "./app/components/blocks/Card";
import { Columns } from "./app/components/blocks/Columns";
import { FeatureList } from "./app/components/blocks/FeatureList";
import { Flex } from "./app/components/blocks/Flex";
import { Stats } from "./app/components/blocks/Stats";
import { VerticalSpace } from "./app/components/blocks/VerticalSpace";
import Template from "./app/components/blocks/Template";
import { CTASection } from "./app/components/blocks/CTASections";
import { FeatureSection } from "./app/components/blocks/FeatureSections";
import { HeroSection } from "./app/components/blocks/HeroSections";
import { NewsletterSection } from "./app/components/blocks/NewsletterSections";

type Props = {
  HeadingBlock: { title: string };
  Hero: any;
  ButtonGroup: any;
  Card: any;
  Columns: any;
  FeatureList: any;
  Flex: any;
  Stats: any;
  Text: any;
  VerticalSpace: any;
  CTASection: any;
  FeatureSection: any;
  HeroSection: any;
  NewsletterSection: any;
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },
    Hero: Hero,
    ButtonGroup: ButtonGroup,
    Card: Card,
    Columns: Columns,
    FeatureList: FeatureList,
    Flex: Flex,
    Stats: Stats,
    Text: TextLabel,
    VerticalSpace: VerticalSpace,
    CTASection: CTASection,
    FeatureSection: FeatureSection,
    HeroSection: HeroSection,
    NewsletterSection: NewsletterSection
  },
};

export default config;
